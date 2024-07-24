import { NextPage } from "next";

// Sample data representing portfolio items
const portfolioData = [
  { imgSrc: "/imgs/portfolio/1.jpg", category: "web development", title: "Web Design" },
  { imgSrc: "/imgs/portfolio/2.jpg", category: "web development", title: "Web Design" },
  { imgSrc: "/imgs/portfolio/3.jpg", category: "web development", title: "Web Design" },
  { imgSrc: "/imgs/portfolio/4.jpg", category: "graphics", title: "graphics" },
  { imgSrc: "/imgs/portfolio/5.jpg", category: "wordpress", title: "Wordpress" },
  { imgSrc: "/imgs/portfolio/6.jpg", category: "wordpress", title: "Wordpress" },
];

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* Map through portfolioData array */}
            {portfolioData.map((item, index) => (
              <div key={index} className={`portfolio-item padd-15`} data-category={item.category}>
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
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
