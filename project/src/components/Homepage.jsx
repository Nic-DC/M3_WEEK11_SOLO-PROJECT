import { Container, Row, Col } from "react-bootstrap";

import HomeSidebar from "./HomeSidebar";
import HomeProfile from "./HomeProfile";
import HomepageMorning from "./HomepageMorning";
import HomeRecent from "./HomeRecent";
import HomeTry from "./HomeTry";
import Player from "./Player";

const Homepage = () => {
  return (
    <div>
      <Container className="container-fluid">
        <Row className="row">
          {/* <Container>
        <Row> */}
          <Col className="column12 col-md-3 col-lg-2 padding-top">
            {/* <Col> */}
            <HomeSidebar />
          </Col>
          {/* <Col> */}
          <Col className="column col-sm-12 col-md-9 col-lg-10 padding-top">
            <HomeProfile />
            <HomepageMorning />
            <HomeRecent />
            <HomeTry />
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid">
        <Row>
          <Col>
            <Player />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homepage;
