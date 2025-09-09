import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // Static products data
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 2500.00 },
    { id: 2, name: 'Mysz komputerowa', price: 45.99 },
    { id: 3, name: 'Klawiatura', price: 89.50 },
    { id: 4, name: 'Monitor', price: 899.00 },
    { id: 5, name: 'Słuchawki', price: 199.99 },
    { id: 6, name: 'Drukarka', price: 299.50 }
  ])

  // State for form inputs
  const [selectedProductId, setSelectedProductId] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  // State for cart items
  const [cartItems, setCartItems] = useState([])

  // Handle product selection change
  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value)
  }

  // Handle quantity change
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value)
    if (value >= 1) {
      setQuantity(value)
    }
  }

  // Add item to cart
  const handleAddToCart = (event) => {
    event.preventDefault()
    
    if (!selectedProductId) {
      return // No product selected
    }

    const product = products.find(p => p.id === parseInt(selectedProductId))
    if (!product) {
      return // Product not found
    }

    const lineTotal = product.price * quantity
    
    // Create new cart item
    const newCartItem = {
      id: Date.now(), // Simple unique ID
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: quantity,
      lineTotal: lineTotal
    }

    // Add to cart
    setCartItems(prev => [...prev, newCartItem])

    // Log to console as required
    console.log(`Pozycja: ${product.name}; ilość: ${quantity}; suma: ${lineTotal.toFixed(2)}`)

    // Reset form
    setSelectedProductId('')
    setQuantity(1)
  }

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.lineTotal, 0)
  }

  // Remove item from cart
  const removeCartItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId))
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mini Sklep - Kalkulator pozycji</h2>
      
      {/* Add Product Form */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Dodaj produkt do koszyka</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleAddToCart}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="productSelect">Produkt:</label>
                      <select
                        className="form-control"
                        id="productSelect"
                        value={selectedProductId}
                        onChange={handleProductChange}
                        required
                      >
                        <option value="">Wybierz produkt...</option>
                        {products.map(product => (
                          <option key={product.id} value={product.id}>
                            {product.name} - {product.price.toFixed(2)} zł
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="quantityInput">Ilość:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantityInput"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-end">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={!selectedProductId}
                    >
                      Dodaj do koszyka
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items Table */}
      {cartItems.length > 0 && (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Pozycje w koszyku</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Produkt</th>
                        <th scope="col">Ilość</th>
                        <th scope="col">Cena jednostkowa</th>
                        <th scope="col">Suma</th>
                        <th scope="col">Akcje</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price.toFixed(2)} zł</td>
                          <td>{item.lineTotal.toFixed(2)} zł</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeCartItem(item.id)}
                            >
                              Usuń
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Subtotal */}
                <div className="row mt-3">
                  <div className="col-md-6 offset-md-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-right">
                          Suma: {calculateSubtotal().toFixed(2)} zł
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty cart message */}
      {cartItems.length === 0 && (
        <div className="row">
          <div className="col-12">
            <div className="alert alert-info text-center">
              <h5>Koszyk jest pusty</h5>
              <p>Dodaj produkty do koszyka, aby zobaczyć podsumowanie.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
