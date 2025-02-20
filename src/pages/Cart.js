
import { Container, Table, Button } from "react-bootstrap"

function Cart() {
  // This is a mock cart. In a real application, you'd fetch this from your state management solution or backend.
  const cartItems = [
    { id: 1, name: "Men's T-Shirt", price: 29.99, quantity: 2 },
    { id: 2, name: "Women's Dress", price: 49.99, quantity: 1 },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Container className="py-5">
      <h1 className="mb-4">My Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="text-end">Total: ${total.toFixed(2)}</h3>
      <div className="text-end mt-3">
        <Button variant="primary">Proceed to Checkout</Button>
      </div>
    </Container>
  )
}

export default Cart