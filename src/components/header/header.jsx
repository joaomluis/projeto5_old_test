import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import logo from "../img/scrum_image.png";

function Header() {
  return (
    <Navbar className="custom-navbar" data-bs-theme="light" expand="lg">
      <Container>
      
        <Navbar.Brand href="home">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          AgileUp
        </Navbar.Brand>
        <Nav className="ms-auto">
          
          <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="login">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
