import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main class="bottom bg-light text-dark">
      <div class="container middle">
        {/* <!-- navbar --> */}
        <Navbar />
        {/* <!-- End navbar --> */}
        {/* <!-- about section --> */}
        <section id="about" class="middle__about">
          <h2 class="text-secondary my-4 border-bottom border-secondary pb-4 text-center">
            About Me.
          </h2>
          <div id="about" class="d-flex align-items-center">
            <div class="middle__aboutText my-0 mx-auto">
              <p class="middle_p text-center">
                I am an LA-based Full-Stack Software Engineer specializing in
                building responsive websites and functional applications.
              </p>
              <h4 class="middle_h4 text-info text-center py-3">Tech Stack:</h4>
              <div class="d-flex flex-column justify-content-center align-items-center">
                <p>
                  Front End: JavaScript | React | HTML5 | CSS3 | EJS | Material
                  UI | Bootstrap
                </p>
                <p>Back End: Node | Express | Mongodb | Mongoose</p>
                <p>Other: Git | Github | NPM | VS Code | Firebase | Heroku</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end about section --> */}
        {/* <!-- Project section --> */}
        <section id="projects" class="middle__projects container-fluid">
          <h2 class="text-secondary my-5 border-bottom border-secondary pb-4 text-center">
            Projects.
          </h2>
          <div class="projects__figureContainer d-flex flex-row justify-content-center align-items-center flex-wrap">
            {/* <!-- Frankslist --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="./assets/img/frankslist.png"
                  class="figure__img"
                  alt="frankslist"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      Frankslist
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">Frankslist</h5>
                    <p class="text-light">
                      MongoDB, Express, React, Node, Mongoose, JWT
                    </p>
                    <a
                      href="https://github.com/booyouon/frankslist"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                    <div>
                      <a
                        href="https://franks-list.netlify.app/"
                        class="text-info"
                      >
                        Live Site
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- MushVroom --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="./assets/img/mushvroom.jpeg"
                  class="figure__img"
                  alt="mushvroom"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      MushVroom
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">MushVroom</h5>
                    <p class="text-light">
                      React, Airtable, Material-UI, Aseprite
                    </p>
                    <a
                      href="https://github.com/booyouon/rpg-character-creator"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                    <div>
                      <a
                        href="https://mushvroom.netlify.app/"
                        class="text-info"
                      >
                        Live Site
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- Brew Finder --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="./assets/img/brewfinder.png"
                  class="figure__img"
                  alt="brewfinder"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      Brew Finder
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">Brew Finder</h5>
                    <p class="text-light">
                      Javascript, Google Maps API, OpenbreweryDB API, microLink
                      API, Abstract Geolocation API
                    </p>
                    <a
                      href="https://github.com/booyouon/brewfinder"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                    <div>
                      <a
                        href="https://booyouon.github.io/brewfinder/"
                        class="text-info"
                      >
                        Live Site
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- UO Website --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="./assets/img/uo.png"
                  class="figure__img"
                  alt="urbanoutfittersclone"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      UO Website Clone
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">UO Website Clone</h5>
                    <p class="text-light">
                      Javascript, EJS, Node, MongoDB, Express, AJAX
                    </p>
                    <a
                      href="https://github.com/booyouon/urbanOutfittersClone"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                    <div>
                      <a href="https://uoclone.onrender.com/" class="text-info">
                        Live Site
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- Kiki's Restaurant --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  class="figure__img"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      Kiki's Restaurant
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">Kiki's Restaurant</h5>
                    <p class="text-light">
                      Javascript, Punk API, EJS, Node.js, MongoDB, Express
                    </p>
                    <a
                      href="https://github.com/booyouon/restaurantWebsite"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                    <div>
                      <a
                        href="https://kiki-restaurant.herokuapp.com/"
                        class="text-info"
                      >
                        Live Site
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- Personal Portfolio --> */}
            <article class="projects__figure mx-1 my-1">
              <figure>
                <img
                  src="./assets/img/portfolio.png"
                  class="figure__img"
                  alt="portfolio"
                />
                <figcaption>
                  <div class="figcaption__noHover">
                    <h3 class="figcaption__noHover__h2 text-light">
                      Personal Portfolio
                    </h3>
                    <p class="figcaption__noHover__p text-light">
                      - hover/click for links -
                    </p>
                  </div>
                  <div class="figcaption__hover">
                    <h5 class="text-info">Personal Portfolio</h5>
                    <p class="text-light">HTML, CSS, Bootstrap</p>
                    <a
                      href="https://codepen.io/booyouon/pen/VwbEOYp"
                      class="text-info"
                    >
                      <i class="fab fa-codepen fa-2x mx-2 text-info"></i>
                    </a>
                    <a
                      href="https://github.com/booyouon/booyouon.github.io"
                      class="text-info"
                    >
                      <i class="fab fa-github fa-2x mx-2 text-info"></i>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </article>
            {/* <!-- End Individual Projects --> */}
          </div>
        </section>
        {/* <!-- End Project Section --> */}
      </div>
    </main>
  );
};

export default Home;
