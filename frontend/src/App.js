import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <AppProvider> {/* Wrap everything in AppProvider */}
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ProductList category="men" />} />
          <Route path="/women" element={<ProductList category="women" />} />
          <Route path="/kids" element={<ProductList category="kids" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
