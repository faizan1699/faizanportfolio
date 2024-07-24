import type { NextPage } from "next";

// import resume from '../../components/cv/FaizanRasheed__full stack web developer.pdf';

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Your name a <span>Full Stack Web Devloper</span>
                  </h2>
                  <p>
                    Hi! My name is Faizan Rasheed. I am a your full stack web developer ( mern stack ), and I am
                    very passionate and dedicated to my work. With 2 years
                    experience as a your full stack web developer ( mern stack ), I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the design process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>not available</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>faizanrasheed169@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BSCS</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+92 303 8019169</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Lahore</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="https://drive.google.com/file/d/1W_LzdYPNmWI1LmppUJrEjjtgm-dNxcN4/view?usp=drive_link"
                       target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="https://www.upwork.com/freelancers/~01fddb691788abab17"
                        target="_blank"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me on upwork
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn Programming. I have
                            learn Html, Css,  JavaScript, Bootstrap NODE / NEXT / REACT. Now I
                            am a Professional Full Stack Web Developer..
                          </p>
                        </div>
                     
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2020
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Computer Technology
                          </h4>
                          <p className="timeline-text">
                             I started my journey to learn basic to advance 
                             texhnologies about computers .  i learn computer basics.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2021
                          </h6>
                          <h4 className="timeline-title">
                            College Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2019 I passed Inter Exam from computer Science Group with
                            930 / 1100. My college name was Govt. Post Graduate College .
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2020
                          </h6>
                          <h4 className="timeline-title">Graphics Design</h4>
                          <p className="timeline-text">
                            From 2019 to 2021 I gain expirience of Graphics Design. The
                            software I use Photoshop, Illustrator for Graphics
                            design.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">Web Development</h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn Coding. I have learn
                            Html, Css, JavaScript, Bootstrap NODE / NEXT / REACT. Now I am a
                            Professional Web Developer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">Wordpress</h4>
                          <p className="timeline-text">
                            Since 2023 I started to learn Wordpress. I can
                            install, Customize, &amp; fix bug on wordpress.{" "} and build customized theme and plugins.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
