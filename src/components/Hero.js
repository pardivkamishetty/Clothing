import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <div
      className="position-relative"
      style={{
        height: "600px",
        backgroundImage: `url('https://wallpaperbat.com/img/455725-clothes-wallpaper.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.3)" }} />

      <Container className="h-100 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bold mb-3">New Collection</h1>
          <p className="fs-5 mb-4">Discover the latest trends in fashion</p>
          <Button variant="light" size="lg">
            Shop Now
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
