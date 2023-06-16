import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top opacity-75">
      <div class="container-fluid">
        <div class="navBrand__bg bg-info rounded-circle">
          <a
            class="navbar-brand text-light font-weight-bold mx-auto my-auto"
            href="#"
          >
            VA
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mr-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="far fa-envelope"></i> Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <i class="fas fa-address-card"></i> About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                <i class="fas fa-hammer"></i> Projects
              </a>
            </li>
            <li>
              <a href="./vinceResume.pdf">
                <button type="button" class="btn btn-outline-info">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
