export const metadata = {
    title: "About",
    description: "About this profile project",
  };
  
  export default function AboutPage() {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>About This Project</h1>
        <p>
          This project uses the Next.js App Router to display profile data from an
          API.
        </p>
        <p>
          The homepage fetches profiles, supports searching, and links to dynamic
          profile detail pages.
        </p>
      </div>
    );
  }
  