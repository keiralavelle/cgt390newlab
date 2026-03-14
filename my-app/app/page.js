import Link from "next/link";
import styles from "./page.module.css";

async function fetchProfiles(search = "") {
  const url = search
    ? `https://dummyjson.com/users/search?q=${search}`
    : `https://dummyjson.com/users`;

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await response.json();
  return data.users ? data.users : [];
}

export const metadata = {
  title: "Profile Project",
  description: "A Next.js profile project",
};

export default async function Home({ searchParams }) {
  const search = searchParams?.search || "";
  const users = await fetchProfiles(search);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Profile Directory</h1>
        <p>Browse profiles and click a user to view details.</p>

        <form className={styles.searchForm}>
          <input
            type="text"
            name="search"
            placeholder="Search profiles"
            defaultValue={search}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>

        <div className={styles.grid}>
          {users.map((user) => (
            <div key={user.id} className={styles.card}>
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className={styles.profileImage}
              />

              <h2>
                {user.firstName} {user.lastName}
              </h2>

              <p>{user.email}</p>
              <p>{user.company?.title}</p>

              <Link href={`/about/${user.id}`} className={styles.button}>
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
