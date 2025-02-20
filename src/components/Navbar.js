import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa"
import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/men">
              Men
            </Nav.Link>
            <Nav.Link as={Link} to="/women">
              Women
            </Nav.Link>
            <Nav.Link as={Link} to="/kids">
              Kids
            </Nav.Link>
            <Nav.Link as={Link} to="/sale" className="text-danger">
              Sale
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Button as={Link} to="/search" variant="link">
              <FaSearch size={20} />
            </Button>
            <Button as={Link} to="/login" variant="link">
              <FaUser size={20} />
            </Button>
            <Button as={Link} to="/cart" variant="link">
              <FaShoppingBag size={20} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar