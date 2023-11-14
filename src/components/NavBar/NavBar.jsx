import "../NavBar/NavBar.css"
import cvPath from "../images/junior full stack web developer.pdf"
import { useState } from "react"
const NavBar = () => {

  return (
    <>
    <header className="row bg-color sticky-top">
      <section className="col-12 d-flex justify-content-center text position-absolute">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                <h1>JUANE G</h1>
                {" "}
                
              
              </a>
              <div className="col-md-3 col-lg-4"></div>
              <button
                className="navbar-toggler custom-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
               
                  <li className="nav-item">
                    <a
                      className="nav-link active black" 
                      aria-current="page"
                      href="/aboutme"
                    >
                      ABOUT
                    </a>
                  </li>
        
                  <li className="nav-item">
                    <a
                      className="nav-link active black"
                      aria-current="page"
                      href="/portfolio"
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active black"
                      aria-current="page"
                      href="/contact"
                    >
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active black"
                      aria-current="page"
                      href={cvPath}
                    >
                      RESUME
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </header>
    </>
  );
};

export default NavBar;
