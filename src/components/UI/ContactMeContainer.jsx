import "../UI/ContactMeContainer.css"
import Form from "../Form/Form.jsx";

const ContactMeContainer = () => {
  
  return (
    <>
      <section className="row d-flex justify-content-center">
        <div className="col-sm-12 col-lg-9 d-flex flex-wrap justify-content-evenly "id="contact">
          <Form />    
        </div>
      </section>
    </>
  );
};
export default ContactMeContainer;
