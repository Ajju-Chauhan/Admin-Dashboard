import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form method="POST" action="{{ url_for('login') }}">
            <h1 className="mb-4">Enter Your Credentials</h1>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required autoFocus name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required name="password" />
            </Form.Group>

            <Button type="submit" variant="primary">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
