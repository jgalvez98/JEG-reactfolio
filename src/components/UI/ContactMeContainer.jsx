import "../UI/ContactMeContainer.css"
import Form from "../Form/Form.jsx";
const ContactMeContainer = () => {
  return (
    <>
    <h1>CONTACT ME</h1>
      <section className="row d-flex justify-content-center">
        <div className="col-sm-12 col-lg-9 d-flex flex-wrap justify-content-evenly">
          <Form />    
        </div>
      </section>
    </>
  );
};
export default ContactMeContainer;
