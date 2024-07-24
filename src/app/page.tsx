
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Faizan Rasheed Profile"
              className="shadow-dark"
            />
            <h1>Faizan Rasheed</h1>
            <p>Full Stack Web Devloper</p>
            <div className="social-links">
                        
              <a href="https://github.com/faizan1699" target="_blank">
                <i className="fa fa-github" />
              </a>

              <a href="https://www.linkedin.com/in/faizan-rasheed-7938a3252/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
