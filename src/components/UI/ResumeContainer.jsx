import "../UI/ResumeContainer.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../Form/Myresume.pdf";

const ResumeContainer = () => {
  return (
    <Box>
      <div>
        <div class="title">
          <h1>My Resume</h1>
          <h1>My Resume</h1>
        </div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "bold",
          }}
        >
          Front-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "bold",
          }}
        >
          Back-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
          <section>
          </section>
        </p>
      </div>
      <a
      
          href={PdfFile}
          download="JUANE G RESUME"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
        My Downloadable Resume
      </Button>
        </a>
    </Box>

  );
}
export default ResumeContainer;