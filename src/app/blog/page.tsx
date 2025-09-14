import type { NextPage } from "next";

const blogPosts = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1581276879432-15a19d654956",
    altText: "HTML Basics",
    date: "Jan 5, 2024",
    title: "HTML: The Foundation of the Web",
    description:
      "HTML structures web content with semantic elements. Learn how to build accessible and SEO-friendly pages using headings, forms, and ARIA roles for better user experience.",
    tags: ["HTML"],
  },
  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    altText: "CSS Styling",
    date: "Feb 10, 2024",
    title: "CSS: Styling for Modern Interfaces",
    description:
      "CSS brings design to life with layouts, animations, and responsive features. Master Flexbox, Grid, and modern CSS tools to build beautiful and scalable interfaces.",
    tags: ["CSS"],
  },
  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    altText: "JavaScript Essentials",
    date: "Mar 8, 2024",
    title: "JavaScript: Building Interactivity on the Web",
    description:
      "JavaScript powers interactivity, event handling, and asynchronous programming in web apps. Explore ES6 features, promises, and clean coding patterns for scalable front-end logic.",
    tags: ["JavaScript"],
  },
  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    altText: "TypeScript Advantages",
    date: "Apr 3, 2024",
    title: "TypeScript: Strong Typing for JavaScript",
    description:
      "TypeScript adds static typing, interfaces, and generics to JavaScript. Improve developer productivity, catch bugs early, and scale projects with confidence.",
    tags: ["TypeScript", "JavaScript"],
  },
  {
    id: 5,
    imgSrc: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    altText: "Express.js Backend",
    date: "May 12, 2024",
    title: "Express.js: Minimal and Powerful Node Framework",
    description:
      "Express.js simplifies backend development with routing, middleware, and REST APIs. Learn how to structure scalable and maintainable server-side applications.",
    tags: ["Node.js", "Express.js"],
  },
  {
    id: 6,
    imgSrc: "https://images.unsplash.com/photo-1675553745349-3256a1f9d6af",
    altText: "Next.js Framework",
    date: "Jun 1, 2024",
    title: "Next.js: React Framework for Production",
    description:
      "Next.js brings SSR, SSG, and ISR to React, improving SEO and performance. Discover routing, API routes, and modern app directory features.",
    tags: ["Next.js", "React.js"],
  },
  {
    id: 7,
    imgSrc: "https://images.unsplash.com/photo-1505682634904-d7c0e6f8e6f4",
    altText: "React + Next.js",
    date: "Jul 15, 2024",
    title: "Building Scalable UIs with React and Next.js",
    description:
      "React's component model and Next.js optimizations combine to create fast, dynamic, and scalable apps. Learn best practices for modern full-stack web development.",
    tags: ["React.js", "Next.js"],
  },
  {
    id: 8,
    imgSrc: "https://images.unsplash.com/photo-1581091012184-5c5b9c4b19fb",
    altText: "MongoDB Database",
    date: "Aug 2, 2024",
    title: "MongoDB: Flexible NoSQL for Modern Apps",
    description:
      "MongoDB stores data in JSON-like documents, offering flexibility and scalability. Learn schema design, aggregation, and how to connect it with Node.js backends.",
    tags: ["MongoDB", "NoSQL"],
  },
  {
    id: 9,
    imgSrc: "https://images.unsplash.com/photo-1559136654-3b8a3a41f07c",
    altText: "PostgreSQL Database",
    date: "Sep 6, 2024",
    title: "PostgreSQL: Advanced Relational Database",
    description:
      "PostgreSQL offers powerful SQL features, transactions, and JSON support. Learn relational modeling, indexing, and best practices for reliable applications.",
    tags: ["PostgreSQL", "SQL"],
  },
  {
    id: 10,
    imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    altText: "SQL Queries",
    date: "Oct 10, 2024",
    title: "SQL: Managing and Querying Data",
    description:
      "SQL is the standard for working with relational databases. Explore SELECT, JOINs, GROUP BY, and normalization to build efficient data-driven apps.",
    tags: ["SQL"],
  },
  {
    id: 11,
    imgSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    altText: "Git and GitHub",
    date: "Nov 5, 2024",
    title: "Git & GitHub: Version Control Made Easy",
    description:
      "Git tracks changes while GitHub enables collaboration. Learn commits, branching, pull requests, and workflows to manage projects effectively.",
    tags: ["Git", "GitHub"],
  },
];

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* Map over blogPosts array */}
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-item padd-15">
                <div className="blog-item-inner shadow-dark">
                  <div className="blog-img">
                    <img src={post.imgSrc} alt={post.altText} />
                    <div className="blog-date">{post.date}</div>
                  </div>
                  <div className="blog-info">
                    <h4 className="blog-title">{post.title}</h4>
                    <p className="blog-description">{post.description}</p>
                    <p className="blog-tags">
                      Tags:{" "}
                      {post.tags.map((tag, index) => (
                        <a key={index} href="#">
                          {tag}
                        </a>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
