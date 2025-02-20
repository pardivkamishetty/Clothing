import { Container, Row, Col } from "react-bootstrap";

const categories = [
  {
    name: "Men's Collection",
    description: "Shop the latest styles for men",
    href: "/men",
    image: "/placeholder.jpg",
  },
  {
    name: "Women's Collection",
    description: "Discover trending women's fashion",
    href: "/women",
    image: "/placeholder.jpg",
  },
  {
    name: "Kid's Collection",
    description: "Adorable styles for little ones",
    href: "/kids",
    image: "/placeholder.jpg",
  },
];

function Categories() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="mb-4 fw-bold">Shop by Category</h2>
        <Row>
          {categories.map((category) => (
            <Col key={category.name} md={4} className="mb-4">
              <a href={category.href} className="text-decoration-none">
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ height: "400px" }}
                >
                  <div
                    className="w-100 h-100"
                    style={{
                      backgroundImage: `url(${category.image})`, // ✅ Fixed: Wrapped in template literal
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                  >
                    <h3 className="h5 fw-semibold mb-2">{category.name}</h3>
                    <p className="mb-0 small">{category.description}</p>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
