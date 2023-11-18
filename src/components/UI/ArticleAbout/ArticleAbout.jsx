import "../ArticleAbout/ArticleAbout.css"
const ArticleAbout = () => {
  const paragraph =
    " Currently i am a full stock developer student at MIA bootcamp. I am passionate aboutt using technology to solve real-world problems. I want to be proficient in a variety of programming languages, and also be skilled in cloud services, design and development. In my spare time i enjoy working on personal projects, such as mobile apps and websites. Lastly, i am extied to pursue a career as a software developer after graduation.";

   
  return (
    <>
      <article className="col-sm-11 col-md-8 col-lg-6 artclMovmnt">
        <h1 className="white mb-4 font-weight-bold">About Me</h1>
        <div className="mx-auto bg-gradient-to-b from-teal-300 rounded-full w-20 h-20 relative overflow-hidden md:h-20 md:w-20 mb-2">
          <img id="avatar" src='/avatar.png' layout="fill" objectFit="cover"/>
        </div>
        <p className="white bg-black" >{paragraph}</p>
        <section className="d-flex flex-wrap justify-content-between">
        </section>
      </article>
    </>
  );
};
export default ArticleAbout;
