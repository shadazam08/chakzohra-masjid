import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import logoImage from "../../assets/logo.svg";

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
          <Image src={logoImage} width={200} />
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

// import React from "react";
// import { Button, Image, Nav, Navbar, Container } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import logoImage from "../../assets/logo.svg";

// const NavBars = ({ language, setLanguage }) => {
//   const labels = {
//     en: { home: "Home", about: "About", address: "Address" },
//     ur: { home: "ہوم", about: "ہمارے بارے میں", address: "پتہ" },
//   };

//   const dir = language === "ur" ? "rtl" : "ltr";

//   return (
//     <StyledNavbar expand="lg" dir={dir}>
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           <BrandContainer>
//             {/* <Logo src={logoImage} alt="Masjid Logo" /> */}
//             <BrandText>
//               <strong>CHAKZOHRA MASJID</strong>
//               <small>تعلیم، تربیت اور تقویٰ کا مرکز</small>
//             </BrandText>
//           </BrandContainer>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className={language === "ur" ? "ms-auto" : "me-auto"}>
//             <StyledNavLink as={NavLink} to="/">
//               {labels[language].home}
//             </StyledNavLink>

//             <StyledNavLink as={NavLink} to="/about">
//               {labels[language].about}
//             </StyledNavLink>

//             <StyledNavLink as={NavLink} to="/address">
//               {labels[language].address}
//             </StyledNavLink>
//           </Nav>

//           <LangButton onClick={() => setLanguage(language === "en" ? "ur" : "en")}>
//             {language === "en" ? "اردو" : "English"}
//           </LangButton>
//         </Navbar.Collapse>
//       </Container>
//     </StyledNavbar>
//   );
// };

// export default NavBars;

// Styled Components
const StyledNavbar = styled(Navbar)`
  background: linear-gradient(90deg, #fff 0%, #fefee9 100%);
  padding: 0.6rem 1.2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  font-family: "Noto Sans", "Noto Nastaliq Urdu", sans-serif;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Logo = styled(Image)`
  height: 60px;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  font-size: 1rem;
  color: #159e85;

  strong {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  small {
    font-size: 0.85rem;
    opacity: 0.75;
    margin-top: 2px;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 14px;
  color: #333;
  position: relative;
  transition: all 0.3s ease;

  &.active,
  &:hover {
    color: #0d6efd;
  }

  &.active::after,
  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #0d6efd;
    border-radius: 1px;
  }
`;

const LangButton = styled(Button)`
  background-color: #0d6efd;
  border: none;
  font-weight: 500;
  padding: 6px 14px;
  font-size: 0.95rem;
  border-radius: 8px;
  margin-top: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #084298;
  }
`;
