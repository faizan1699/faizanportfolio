import { NextPage } from "next";
import img1 from "@/assets/img-1.png";
import sd from "@/assets/3d.png";

const portfolioData = [
  {
    imgSrc: img1.src,
    category: "web development",
    title: "University Management System",
    url: "http://aku.umsoncloud.com/e-portal/login",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    category: "web development",
    title: "Personal Portfolio Website",
    url: "https://github.com/faizan1699/portfolio-website",
  },
  {
    imgSrc: sd.src,
    category: "frontend",
    title: "3d Product Showcase",
    url: "https://faizan1699.github.io/",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "backend",
    title: "REST API with Express.js",
    url: "https://github.com/faizan1699/express-api",
  },
];

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>PORTFOLIO</h2>
            </div>
          </div>
          <div className="row">
            {/* Map through portfolioData array */}
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className="portfolio-item padd-15"
                data-category={item.category}
              >
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <div className="icon">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End map */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
