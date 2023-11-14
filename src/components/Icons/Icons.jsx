import '../Icons/Icons.css'
const Icons = () => {
  return (
    <>
      <div className="d-flex justify-content-center custom-container-icons">
        <div className="col-3 d-flex justify-content-evenly">
          <div className="col-2 custom-responsive-icons">
            <a href="https://github.com" className="white">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </div>
          <div className="col-2 white custom-responsive-icons">
            <a
              href="https://www.linkedin.com"
              className="white"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </div>
          <div className="col-2 white custom-responsive-icons">
            <a
              href="https://www.facebook.com"
              className="white"
            >
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
