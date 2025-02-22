import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Newsletter() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2 className="mb-4 fw-bold">Subscribe to Our Newsletter</h2>
            <p className="mb-4">Stay updated with our latest offers and new arrivals!</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;