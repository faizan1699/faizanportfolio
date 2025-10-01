"use client";

import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    contact: "",
    description: "Hi I Am "
  })

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    })

  }


  const handelSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/contact", inputs)
      setLoading(false);
      setInputs({
        name: "",
        email: "",
        contact: "",
        description: ""
      })
      contact: ""
      alert(response?.data?.message);
    }
    catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
      setLoading(false);
    }

  }

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Your Address, City</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-whatsapp" />
              </div>
              <h4>Call Us On</h4>
              <p>+92 303 8019169</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>faizanrasheed169@gmail.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15" onSubmit={handelSendMessage}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={inputs.value}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Name*"
                      autoComplete="new-name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      name="email"
                      value={inputs.email}
                      type="email"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Email*"
                      autoComplete="new-email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      name="contact"
                      type="number"
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="phone number with country code*"
                      autoComplete="new-contact"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name="description"
                      value={inputs.description}
                      className="form-control"
                      onChange={handleInputChange}
                      placeholder="Your Message*"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn" title="this feature not available">
                    {loading ? "loading..." : "send message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
