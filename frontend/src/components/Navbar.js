import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

function NavigationBar() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={ScrollLink} to="men" smooth={true} duration={500}>
              Men
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="women" smooth={true} duration={500}>
              Women
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="kids" smooth={true} duration={500}>
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

