import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import useUserStore from "./store/useUserStore.jsx";
import Header from "./components/header/header.jsx";
import Sidebar from "./components/side-nav-bar/sidebar.jsx";
import Login from "./components/login/login.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <div>
      {/* Header */}
      <header>
        <Container fluid>
          <Row>
            <Col>
              {/* Your header content goes here */}
              <Header />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main content */}
      <Container fluid>
        <Row>
          {/* Aside */}
          <Col md={3} style={{ maxWidth: "270px" }}>
            {/* Your aside content goes here */}
            <aside>
              <Sidebar />
              {/*{isLoggedIn && <Sidebar />}*/}
            </aside>
          </Col>

          {/* Main content part */}
          <Col md={9}>
            {/* Your main content goes here */}
            <main>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </main>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer>
        <Container fluid>
          <Row>
            <Col className="text-center text-white">
              {/* Your footer content goes here */}
              <h1>FOOTER</h1>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App;
