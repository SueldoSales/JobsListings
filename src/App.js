import React from 'react';
function App() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong className="workName">Photosnap</strong> <span class="tag is-primary is-rounded">NEW!</span> <span class="tag is-dark is-rounded">FEATURED</span>
                    <br />
                    <strong className="jobName">Senior Frontend Developer</strong>
                    <br />
                    1d ago <i className="fas fa-circle"></i> Part Time <i className="fas fa-circle"></i> Remote
                  </p>
                </div>
              </div>
              <div className="media-right">
                <span className="tag is-success is-light is-medium">Frontend</span>
                <span className="tag is-success is-light is-medium">Senior</span>
                <span className="tag is-success is-light is-medium">HTML</span>
                <span className="tag is-success is-light is-medium">CSS</span>
                <span className="tag is-success is-light is-medium">JavaScript</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
