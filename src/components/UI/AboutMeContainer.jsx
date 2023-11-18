import "../UI/AboutMeContainer.css"
import ArticleAbout from "./ArticleAbout/ArticleAbout";

const AboutMeContainer = () => {

  return (
    <>
      <section className="row d-flex flex-wrap">
        <section className="row d-flex justify-content-center">
          <div className="col-sm-12 col-lg-8 d-flex justify-content-evenly flex-wrap custom-container-about-me">
            <ArticleAbout/>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutMeContainer;
