import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function Login() {
  return (
    <Container fluid className="min-vh-100  min-vw-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={11} sm={8} md={6} lg={4}>
          <Card className="shadow p-4">
            <Card.Body>
              <h2 className="text-center mb-4">🔐 Login</h2>
              <Form method="POST" action="{{ url_for('login') }}">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required autoFocus name="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required name="password" placeholder="Enter your password" />
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" variant="primary" size="lg">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
