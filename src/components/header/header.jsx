import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./header.css";
import logo from "../img/scrum_image.png";
import { Link } from "react-router-dom";
import useUserStore from "../../store/useUserStore.jsx";

function Header() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <Navbar className="custom-navbar" data-bs-theme="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
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
          {!isLoggedIn && (
            <>  

              <NavDropdown title={<i className="bi bi-bell"></i>} id="basic-nav-dropdown">
                <NavDropdown.Item >User</NavDropdown.Item>
                <NavDropdown.Item >Admin</NavDropdown.Item>  
              </NavDropdown>
            
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <Link to="/login" className="nav-link">
                Logout
              </Link>
            </>
          )}

          {isLoggedIn && (
            <div className="d-grid">
              <Link to="/register" className="nav-link">
                <button className="btn btn-primary">Sign up</button>
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
