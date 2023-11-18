import "../NavBar/NavBar.css"

  function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
    <header className="row bg-color sticky-top">
      <section className="col-12 d-flex justify-content-center text position-absolute">
        <div className="col-12 bg-black">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand white" href="/about">
                <h1>JUANE G</h1>       
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
               
                  <li className="nav-aboutme">
                    <a
                      className={
                        currentPage === "about"
                        ?"nav-link active warning" 
                        :"nav-link white"
                      }
                      aria-current="page"
                      href="/aboutme"
                      onClick={() => {
                        handlePageChange("About");
                      }}
                    >
                      ABOUT
                    </a>
                  </li>
        
                  <li className="nav-portfolio">
                    <a
                     className={
                      currentPage === "portfolio"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="/portfolio"
                    onClick={() => {
                      handlePageChange("portfolio");
                    }}
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-contact">
                  <a
                     className={
                      currentPage === "contact"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="/contact"
                    onClick={() => {
                      handlePageChange("contact");
                    }}
                    >
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-resume">
                  <a
                     className={
                      currentPage === "resume"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="resume"
                    onClick={() => {
                      handlePageChange("resume");
                    }}
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
