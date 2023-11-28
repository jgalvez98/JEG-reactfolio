import "../NavBar/NavBar.css"

  function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
    <header className="row bg-color sticky-top">
      <section className="col-12 d-flex justify-content-center text position-absolute">
        <div className="col-12 bg-black">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand white" href="#about">
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
               
                  <li className="nav-about">
                    <a
                      className={
                        currentPage === "About"
                        ?"nav-link active warning" 
                        :"nav-link white"
                      }
                      aria-current="page"
                      href="#About"
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
                      currentPage === "Portfolio"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="#Portfolio"
                    onClick={() => {
                      handlePageChange("Portfolio");
                    }}
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="nav-contact">
                  <a
                     className={
                      currentPage === "Contact"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="#Contact"
                    onClick={() => {
                      handlePageChange("Contact");
                    }}
                    >
                      CONTACT
                    </a>
                  </li>
                  <li className="nav-resume">
                  <a
                     className={
                      currentPage === "Resume"
                      ?"nav-link active warning" 
                      :"nav-link white"
                    }
                    aria-current="page"
                    href="#Resume"
                    onClick={() => {
                      handlePageChange("Resume");
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
