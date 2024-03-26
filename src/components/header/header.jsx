import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import logo from "../img/scrum_image.png";

function Header({showSidebar}) {
  return (
    <Navbar className="custom-navbar" data-bs-theme="light" expand="lg">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
          onClick={showSidebar}
        />
        <Navbar.Brand href="home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          AgileUp
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="features">Features</Nav.Link>
          <Nav.Link href="pricing">Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
