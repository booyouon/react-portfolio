import React from "react";

const PreviewCard = () => {
  return (
    <article class="projects__figure mx-1 my-1">
      <figure>
        <img src="./img/frankslist.png" class="figure__img" alt="frankslist" />
        <figcaption>
          <div class="figcaption__noHover">
            <h3 class="figcaption__noHover__h2 text-light">Frankslist</h3>
            <p class="figcaption__noHover__p text-light">
              - hover/click for links -
            </p>
          </div>
          <div class="figcaption__hover">
            <h5 class="text-info">Frankslist</h5>
            <p class="text-light">
              MongoDB, Express, React, Node, Mongoose, JWT
            </p>
            <a href="https://github.com/booyouon/frankslist" class="text-info">
              <i class="fab fa-github fa-2x mx-2 text-info"></i>
            </a>
            <div>
              <a href="https://franks-list.netlify.app/" class="text-info">
                Live Site
              </a>
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default PreviewCard;
