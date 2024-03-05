import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import style from "./Nav.module.css";

const NavBar = () => {
  return (
    <Navbar className={style.navBar}>
      <Container className={style.navBarElements}>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className={style.navBarLinks}>
          <Nav.Link href="#bio">Bio</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#thanks">Special Thanks</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
