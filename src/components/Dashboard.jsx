import Sidebar from "./Sidebar";
import { Container, Row, Col, Card } from "react-bootstrap";
import useWindowWidth from "./hooks/useWindowWidth";

export default function Dashboard() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const sidebarWidth = 250;

  return (
    <div className="d-flex flex-column flex-md-row">
      <Sidebar />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
          padding: "1rem",
        }}
      >
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>User Status</Card.Title>
                  <Card.Text>Active Users: 102</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>New Users</Card.Title>
                  <Card.Text>Joined this week: 18</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Manage Users</Card.Title>
                  <button className="btn btn-primary me-2">Create User</button>
                  <button className="btn btn-danger">Delete User</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
