import { useState } from "react"
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap"

function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real application, you'd make an API call here to search for products
    // For now, we'll just simulate some results
    setSearchResults([
      { id: 1, name: "Men's T-Shirt", price: 29.99, image: "/placeholder.jpg" },
      { id: 2, name: "Women's Dress", price: 49.99, image: "/placeholder.jpg" },
      { id: 3, name: "Kid's Sneakers", price: 34.99, image: "/placeholder.jpg" },
    ])
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Search Products</h1>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Search
        </Button>
      </Form>

      <Row>
        {searchResults.map((product) => (
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

export default Search