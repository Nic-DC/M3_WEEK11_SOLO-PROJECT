import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebarCol">
          <Sidebar />
        </Col>
        <Col md={10} id="contentCol">
          <Content />
        </Col>
      </Row>
      <Row>
        <Col>
          <Player />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
