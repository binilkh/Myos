import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./topBar.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const TopBar = () =>  {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };
return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">{t("Myos")}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={t("Language")} id="basic-nav-dropdown">
            <NavDropdown.Item title="English" id="english" onClick={() => changeLanguage("en")}>
              {t("English")}
            </NavDropdown.Item>
            <NavDropdown.Item title="German" id="german" onClick={() => changeLanguage("de")}>
              {t("German")}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TopBar;