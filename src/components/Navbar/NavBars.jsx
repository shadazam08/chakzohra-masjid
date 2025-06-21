import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logImage from "../../assets/logo.svg";

const NavBars = ({ language, setLanguage }) => {
  const labels = {
    en: { home: "Home", about: "About", address: "Address" },
    ur: { home: "ہوم", about: "ہمارے بارے میں", address: "پتہ" },
  };

  const dir = language === "ur" ? "rtl" : "ltr";

  return (
    <Navbar expand="lg" dir={dir} className="custom-navbar">
      <Navbar.Brand as={Link} to={"/"}>
        <div className="custom-brand-link">
          <Image src={logImage} width={200} />
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={language === "ur" ? "ms-auto" : "me-auto"}>
          <Nav.Link as={NavLink} to={"/"} className="custom-nav-link">
            {labels[language].home}
          </Nav.Link>

          <Nav.Link as={NavLink} to={"/about"} className="custom-nav-link">
            {labels[language].about}
          </Nav.Link>

          <Nav.Link as={NavLink} to={"/address"} className="custom-nav-link">
            {labels[language].address}
          </Nav.Link>
        </Nav>

        <Button className="custom-button" onClick={() => setLanguage(language === "en" ? "ur" : "en")}>
          {language === "en" ? "اردو" : "English"}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBars;
