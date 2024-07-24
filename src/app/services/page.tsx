import type { NextPage } from "next";

// Define an array of service items
const serviceItems = [
  {
    iconClass: "fa fa-code",
    title: "Web Development",
    description: "Turn your digital ideas into reality with our web development solutions. We specialize in crafting robust and dynamic websites that are tailored to meet your specific business needs and objectives."
  },
  {
    iconClass: "fa fa-code",
    title: "Ecommerce development",
    description: "Launch your online store with our ecommerce development services. We specialize in creating robust ecommerce platforms that provide a seamless shopping experience for your customers. Whether you're starting from scratch or upgrading an existing platform, our solutions are designed to enhance your online sales and streamline your business operations."
  },
  {
    iconClass: "fa fa-paint-brush",
    title: "Professional Logo Design",
    description: "Elevate your brand with a unique and memorable logo. Our expert designers will create a distinctive logo that reflects your business identity and leaves a lasting impression on your audience."
  },
  {
    iconClass: "fa fa-laptop",
    title: "Custom Web Design",
    description: "Create a stunning online presence with our custom web design services. We will tailor a website that not only looks impressive but also delivers a seamless user experience, helping you achieve your online goals."
  },
  {
    iconClass: "fa fa-wordpress",
    title: "WordPress Development",
    description: "Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable WordPress site that empowers you to manage content effortlessly and stay ahead in the digital landscape."
  },

  {
    iconClass: "fa fa-rocket",
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic to your website with our SEO optimization services. Our experts employ proven strategies to improve your search engine rankings and grow your online presence."
  }
];

const Service: NextPage = () => {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="row">
          {/* Map over serviceItems array */}
          {serviceItems.map((item, index) => (
            <div key={index} className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className={item.iconClass} /></div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
