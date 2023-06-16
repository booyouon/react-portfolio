import React from "react";

const Header = () => {
  return (
    <header class="bg-dark text-light">
      <div class="container">
        <div class="top text-center">
          <h1 class="text-info">Vince Abuyuan,</h1>
          <h2 class="user-select-none position-relative">
            <span id="myTitle">Front End Developer</span>
            <span
              id="counterKeeper"
              class="position-absolute top-0 start-100 translate-middle badge bg-danger fs-6"
            >
              0<span class="visually-hidden">unread messages</span>
            </span>
          </h2>
          <br />
          <a href="mailto:abuyuanvince@gmail.com">
            <button type="button" class="btn btn-outline-light">
              Contact Me
            </button>
          </a>
          <div class="top__socials mt-5">
            <a href="https://www.linkedin.com/in/vinceabuyuan/">
              <i class="fab fa-linkedin fa-3x mx-1 text-info"></i>
            </a>
            <a href="https://codepen.io/booyouon">
              <i class="fab fa-codepen fa-3x mx-1 text-info"></i>
            </a>
            <a href="https://github.com/booyouon">
              <i class="fab fa-github-square fa-3x mx-1 text-info"></i>
            </a>
            <a href="https://dev.to/booyouon">
              <i class="fab fa-dev fa-3x mx-1 text-info"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
