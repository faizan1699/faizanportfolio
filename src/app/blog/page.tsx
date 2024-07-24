import type { NextPage } from "next";

const blogPosts = [
  {
    id: 1,
    imgSrc: "/imgs/blog/1.jpg",
    altText: "Responsive Web Design",
    date: "June 4, 2024",
    title: "Mastering Responsive Web Design",
    description:
      "In today's digital landscape, responsive web design is not just a trend; it is a necessity. Explore the principles and techniques behind creating websites that adapt seamlessly to various devices and screen sizes.",
    tags: ["HTML", "CSS"]
  },
  {
    id: 2,
    imgSrc: "/imgs/blog/2.jpg",
    altText: "Creative Slideshow",
    date: "June 4, 2024",
    title: "Unleashing Creativity with Slideshows",
    description:
      "Discover innovative ways to create captivating slideshows that engage your audience. From stunning visuals to seamless transitions, this blog post explores the art of crafting memorable slideshows for your website.",
    tags: ["HTML", "CSS"]
  },
  {
    id: 3,
    imgSrc: "/imgs/blog/3.jpg",
    altText: "Image Gallery Lightbox",
    date: "June 12, 2023",
    title: "Enhancing User Experience with Image Gallery Lightboxes",
    description:
      "Explore the benefits of incorporating image gallery lightboxes into your website design. From improved user experience to showcasing your visual content in style, this blog post sheds light on this valuable web design feature.",
    tags: ["HTML", "CSS"]
  },
  {
    id: 4,
    imgSrc: "/imgs/blog/4.jpeg",
    altText: "Node.js Basics",
    date: "June 11, 2023",
    title: "Getting Started with Node.js",
    description:
      "Learn the fundamentals of Node.js and how it can be used to build scalable and efficient server-side applications.",
    tags: ["Node.js"]
  },
  {
    id: 5,
    imgSrc: "/imgs/blog/5.jpeg",
    altText: "Express.js Overview",
    date: "June 3, 2024",
    title: "Express.js: A Minimalist Web Framework for Node.js",
    description:
      "Discover the power of Express.js and how it simplifies the process of building web applications with Node.js.",
    tags: ["Node.js", "Express.js"]
  },
  {
    id: 6,
    imgSrc: "/imgs/blog/6.jpeg",
    altText: "Next.js Introduction",
    date: "Jan 1, 2024",
    title: "An Introduction to Next.js: React Framework for Production",
    description:
      "Explore Next.js, a powerful framework for building server-rendered React applications with ease and efficiency.",
    tags: ["Next.js", "React.js"]
  },
  {
    id: 7,
    imgSrc: "/imgs/blog/7.png",
    altText: "React.js Best Practices",
    date: "may 5, 2024",
    title: "Best Practices for Developing with React.js",
    description:
      "Learn essential tips and techniques for building scalable and maintainable applications with React.js.",
    tags: ["React.js"]
  }
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
                        <a key={index} href="#">{tag}</a>
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
