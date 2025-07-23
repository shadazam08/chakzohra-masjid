'use client'
import React from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import "./NavBars.css"; // Assuming you have a CSS file for custom styles

const NavBars = () => {
  const { language, setLanguage } = useLanguage()
  const labels = {
    en: { home: "Home", about: "About", address: "Address" },
    ur: { home: "ہوم", about: "ہمارے بارے میں", address: "پتہ" },
  };

  const dir = language === "ur" ? "rtl" : "ltr";
  return (
    <Navbar expand="lg" dir={dir} className="custom-navbar">
      <Navbar.Brand as={Link} href={"/"}>
        <div className="custom-brand-link">
          <Image src="./logo.svg" width={200} alt="" />
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={language === "ur" ? "ms-auto" : "me-auto"}>
          <Nav.Link as={Link} href={"/"} className="custom-nav-link">
            {labels[language].home}
          </Nav.Link>

          <Nav.Link as={Link} href={"/about"} className="custom-nav-link">
            {labels[language].about}
          </Nav.Link>

          <Nav.Link as={Link} href={"/address"} className="custom-nav-link">
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

// 'use client'
// import { useLanguage } from "../context/LanguageContext";
// import React from "react";
// import { Button, Image as RBImage, Nav, Navbar } from "react-bootstrap";
// import Link from "next/link";
// import './NavBars.css'; // Assuming you have a CSS file for custom styles

// const NavBars = () => {
//   const { language, setLanguage } = useLanguage();
//   const labels = {
//     en: { home: "Home", about: "About", address: "Address" },
//     ur: { home: "ہوم", about: "ہمارے بارے میں", address: "پتہ" },
//   };

//   const dir = language === "ur" ? "rtl" : "ltr";

//   return (
//     <Navbar expand="lg" dir={dir} className="custom-navbar">
//       <Link href="/" passHref legacyBehavior>
//         <Navbar.Brand>
//           <div className="custom-brand-link">
//             <RBImage src="/logo.svg" width={200} />
//           </div>
//         </Navbar.Brand>
//       </Link>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />

//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className={language === "ur" ? "ms-auto" : "me-auto"}>
//           <Link href="/" passHref legacyBehavior>
//             <Nav.Link className="custom-nav-link">{labels[language].home}</Nav.Link>
//           </Link>

//           <Link href="/about" passHref legacyBehavior>
//             <Nav.Link className="custom-nav-link">{labels[language].about}</Nav.Link>
//           </Link>

//           <Link href="/address" passHref legacyBehavior>
//             <Nav.Link className="custom-nav-link">{labels[language].address}</Nav.Link>
//           </Link>
//         </Nav>

//         <Button className="custom-button" onClick={() => setLanguage(language === "en" ? "ur" : "en")}>
//           {language === "en" ? "اردو" : "English"}
//         </Button>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBars;
