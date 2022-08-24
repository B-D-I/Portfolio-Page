import { Container, Row, Col } from "react-bootstrap";
import spaceman from "../assets/img/header-img.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <br />
            <img id="spaceman" src={spaceman} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          </Col>
        </Row>
      </Container>
    </footer>
  )
}