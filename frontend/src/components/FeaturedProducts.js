import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const products = {
  men: [
    { id: 1, name: "Men's T-Shirt", price: 29.99, image: "/placeholder.jpg" },
    { id: 2, name: "Men's Jeans", price: 59.99, image: "/placeholder.jpg" },
    { id: 3, name: "Men's Sneakers", price: 79.99, image: "/placeholder.jpg" },
    { id: 4, name: "Men's Jacket", price: 89.99, image: "/placeholder.jpg" },
  ],
  women: [
    { id: 1, name: "Women's Dress", price: 49.99, image: "/placeholder.jpg" },
    { id: 2, name: "Women's Blouse", price: 39.99, image: "/placeholder.jpg" },
    { id: 3, name: "Women's Skirt", price: 34.99, image: "/placeholder.jpg" },
    { id: 4, name: "Women's Heels", price: 69.99, image: "/placeholder.jpg" },
  ],
  kids: [
    { id: 1, name: "Kid's Pajamas", price: 24.99, image: "/placeholder.jpg" },
    { id: 2, name: "Kid's Sneakers", price: 34.99, image: "/placeholder.jpg" },
    { id: 3, name: "Kid's T-Shirt", price: 19.99, image: "/placeholder.jpg" },
    { id: 4, name: "Kid's Jeans", price: 29.99, image: "/placeholder.jpg" },
  ],
};

function FeaturedProducts({ category, title }) {
  return (
    <section className="py-5" id={category}>
      <Container>
        <h2 className="mb-4 fw-bold">{title}</h2>
        <Row>
          {products[category].map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedProducts;