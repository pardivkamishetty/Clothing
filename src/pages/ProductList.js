import { Container, Row, Col, Card, Button } from "react-bootstrap"

const products = {
  men: [
    { id: 1, name: "Men's T-Shirt", price: 29.99, image: "/placeholder.jpg" },
    { id: 2, name: "Men's Jeans", price: 59.99, image: "/placeholder.jpg" },
    // Add more men's products...
  ],
  women: [
    { id: 1, name: "Women's Dress", price: 49.99, image: "/placeholder.jpg" },
    { id: 2, name: "Women's Blouse", price: 39.99, image: "/placeholder.jpg" },
    // Add more women's products...
  ],
  kids: [
    { id: 1, name: "Kid's Pajamas", price: 24.99, image: "/placeholder.jpg" },
    { id: 2, name: "Kid's Sneakers", price: 34.99, image: "/placeholder.jpg" },
    // Add more kids' products...
  ],
}

function ProductList({ category }) {
  const categoryProducts = products[category] || []

  return (
    <Container className="py-5">
      <h1 className="mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}'s Collection</h1>
      <Row>
        {categoryProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
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
  )
}

export default ProductList