import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Static list of 15 products
  const [products] = useState([
    { id: 1, name: 'Laptop Dell', price: 3499.99 },
    { id: 2, name: 'Mysz komputerowa', price: 89.99 },
    { id: 3, name: 'Klawiatura mechaniczna', price: 299.99 },
    { id: 4, name: 'Monitor 27"', price: 1299.99 },
    { id: 5, name: 'Słuchawki bezprzewodowe', price: 399.99 },
    { id: 6, name: 'Kamera internetowa', price: 249.99 },
    { id: 7, name: 'Drukarka laserowa', price: 899.99 },
    { id: 8, name: 'Smartfon Samsung', price: 2499.99 },
    { id: 9, name: 'Tablet iPad', price: 1999.99 },
    { id: 10, name: 'Etui na telefon', price: 49.99 },
    { id: 11, name: 'Powerbank', price: 129.99 },
    { id: 12, name: 'Kabel USB-C', price: 29.99 },
    { id: 13, name: 'Głośnik Bluetooth', price: 199.99 },
    { id: 14, name: 'Konsola do gier', price: 1999.99 },
    { id: 15, name: 'Router WiFi', price: 299.99 }
  ])

  // State for search and sort
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name') // 'name' or 'price'

  const normalizeSearchTerm = (value) => value.trim().toLowerCase()

  const matchesSearch = (product, normalizedTerm) => {
    if (!normalizedTerm) {
      return true
    }
    return product.name.toLowerCase().includes(normalizedTerm)
  }

  const logResultCount = (count) => {
    console.log(`Wyniki: ${count}`)
  }

  // Filter products by search term
  const normalizedSearchTerm = normalizeSearchTerm(searchTerm)
  const filteredProducts = products.filter(product =>
    matchesSearch(product, normalizedSearchTerm)
  )

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name, 'pl', { sensitivity: 'base' })
    } else if (sortBy === 'price') {
      return a.price - b.price
    }
    return 0
  })

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)

    const normalizedValue = normalizeSearchTerm(value)
    const filteredCount = products.filter(product =>
      matchesSearch(product, normalizedValue)
    ).length

    logResultCount(filteredCount)
  }

  // Handle sort by name
  const handleSortByName = () => {
    setSortBy('name')
    console.log('Sortowanie: po nazwie')
  }

  // Handle sort by price
  const handleSortByPrice = () => {
    setSortBy('price')
    console.log('Sortowanie: po cenie')
  }

  // Clear search
  const handleClearSearch = () => {
    setSearchTerm('')
    logResultCount(products.length)
  }

  useEffect(() => {
    logResultCount(products.length)
  }, [products])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista produktów</h2>
      
      <div className="row">
        <div className="col-md-12">
          {/* Search and Sort Section */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Wyszukiwanie i sortowanie</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="searchInput">Szukaj:</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="searchInput"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Wprowadź nazwę produktu..."
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={handleClearSearch}
                          disabled={!searchTerm}
                        >
                          Wyczyść
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="sortButtons">Sortowanie:</label>
                    <div id="sortButtons" className="btn-group w-100" role="group">
                      <button
                        type="button"
                        className={`btn ${sortBy === 'name' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={handleSortByName}
                      >
                        Sortuj po nazwie
                      </button>
                      <button
                        type="button"
                        className={`btn ${sortBy === 'price' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={handleSortByPrice}
                      >
                        Sortuj po cenie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Counter */}
              <div className="mt-3">
                <div className="alert alert-info mb-0">
                  <strong>Liczba produktów: {sortedProducts.length}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Produkty</h5>
            </div>
            <div className="card-body">
              {sortedProducts.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nazwa</th>
                        <th scope="col">Cena</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedProducts.map((product, index) => (
                        <tr key={product.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.name}</td>
                          <td>{product.price.toFixed(2)} zł</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="alert alert-warning">
                    <h5>Brak wyników</h5>
                    <p className="mb-0">
                      Nie znaleziono produktów pasujących do frazy "{searchTerm}".
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
