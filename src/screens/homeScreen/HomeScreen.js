import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/Video/Video.js";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar.js";

function HomeScreen() {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
