import "../UI/HeroContainer.css";
import Icons from "../Icons/Icons.jsx";

const HeroContainer = () => {
  const paragraph =
    " Programing and Design from the Future. Currently creating beautiful stuff in Miami, Florida.";
  const bgImg = "custom-container-picture-drops";

  return (
    <>
      <section className="row custom-margin-water-container" id="home">
        <div className={bgImg}>
          <section className="row d-flex justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 custom-container-avatar">


              <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8 text-center container">
                <p className="grey">{paragraph}</p>
              </div>
              <Icons />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default HeroContainer;
