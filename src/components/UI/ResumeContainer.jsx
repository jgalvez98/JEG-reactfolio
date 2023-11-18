import "../UI/ResumeContainer.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../Form/UM full stack bootcamp invoice 2.pdf";
//import { FaFileDownload } from 'react-icons/fa';

const ResumeContainer = () => {
  return (
    <Box>
      <div>
      <h1 className=" title white mb-4 font-weight-bold ">My Resume</h1>
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
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
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
            textDecoration: "underline",
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
          - HTML
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
        </p>
      </div>
      <Button id="resume-button" className="pop-on-hover">
            My Resume
          </Button>
    </Box>
    
  );
}
export default ResumeContainer;