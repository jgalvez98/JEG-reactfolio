import { useState } from "react";
import AboutMeContainer from "./UI/AboutMeContainer";
import PortfolioContainer from "./UI/PortfolioContainer";
import ContactMeContainer from "./UI/ContactMeContainer.jsx";
import ResumeContainer from "./UI/ResumeContainer";

import NavBar from "./NavBar/NavBar";
import Footer from "./UI/Footer/Footer";


export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <AboutMeContainer />;
    }
    if (currentPage === "Contact") {
      return <ContactMeContainer />;
    }
    if (currentPage === "Portfolio") {
      return <PortfolioContainer />;
    }
    if (currentPage === "Resume") {
      return <ResumeContainer />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}