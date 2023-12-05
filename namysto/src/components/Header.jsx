import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/header.css";

const Header = ({ setMenuRequest }) => {
  const menu = [
    "NAMYSTO",
    "Support Us",
    "Media",
    "Contacts",
    "Present Projects",
    "Past Projects",
  ];
  function clickHandler(e) {
    if (menu.includes(e.target.innerText)) {
      setMenuRequest(e.target.innerText);
    }
  }
  return (
    <nav className="header-section" onClick={clickHandler}>
      <Container>
        <Row className="header-section-row">
          <Col sm={12} md={6} lg={2} className="button-container">
            <a href="#">NAMYSTO</a>
          </Col>

          <Col sm={12} md={6} lg={2} className="button-container">
            <NavDropdown title="Our Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Present Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Past Projects</NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <a href="#">Support Us</a>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <a href="#">Media</a>
          </Col>
          <Col sm={12} md={6} lg={2} className="button-container">
            <a href="#">Contacts</a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Header;
