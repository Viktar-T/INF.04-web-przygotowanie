import 'bootstrap/dist/css/bootstrap.css'
import { useState, useRef, useEffect } from 'react'

function App() {
  // State for items list and input
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [lastAction, setLastAction] = useState('')
  
  // Ref for input focus management
  const inputRef = useRef(null)

  // Focus input on component mount and after adding items
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [items])

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // Add item to list
  const addItem = () => {
    const trimmedValue = inputValue.trim()
    
    if (trimmedValue) {
      const newItem = {
        id: Date.now(),
        text: trimmedValue,
        timestamp: new Date().toLocaleTimeString()
      }
      
      setItems(prev => [...prev, newItem])
      setInputValue('')
      setLastAction('Dodano element')
    }
  }

  // Handle keyboard events
  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault()
        const trimmedValue = inputValue.trim()
        if (trimmedValue) {
          addItem()
          console.log('Submit: Enter')
          setLastAction('Dodano za pomocą Enter')
        }
        break
        
      case 'Escape':
        event.preventDefault()
        setInputValue('')
        console.log('Clear: Escape')
        setLastAction('Wyczyszczono za pomocą Escape')
        break
        
      default:
        break
    }
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    addItem()
    setLastAction('Dodano za pomocą przycisku')
  }

  // Clear all items
  const clearAllItems = () => {
    setItems([])
    setLastAction('Wyczyszczono wszystkie elementy')
  }

  // Remove specific item
  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id))
    setLastAction('Usunięto element')
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Formularz z skrótami klawiaturowymi</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Add Item Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Dodaj element</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="itemInput">Nazwa elementu:</label>
                  <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    id="itemInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Wprowadź nazwę elementu..."
                    autoFocus
                  />
                  <small className="text-muted">
                    Użyj <kbd>Enter</kbd> aby dodać, <kbd>Escape</kbd> aby wyczyścić
                  </small>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    disabled={!inputValue.trim()}
                  >
                    Dodaj
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={clearAllItems}
                    disabled={items.length === 0}
                  >
                    Wyczyść wszystko
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Last Action Display */}
          {lastAction && (
            <div className="alert alert-info" role="alert">
              <h6 className="alert-heading">Ostatnia akcja:</h6>
              <p className="mb-0">{lastAction}</p>
              <hr />
              <p className="mb-0">
                Sprawdź konsolę przeglądarki aby zobaczyć logi skrótów klawiaturowych.
              </p>
            </div>
          )}
        </div>

        <div className="col-md-6">
          {/* Items List */}
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="card-title mb-0">Lista elementów</h6>
              <span className="badge badge-primary">
                {items.length} elementów
              </span>
            </div>
            <div className="card-body">
              {items.length > 0 ? (
                <div className="list-group list-group-flush">
                  {items.map((item, index) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <span className="font-weight-bold">{index + 1}.</span>
                        <span className="ml-2">{item.text}</span>
                        <br />
                        <small className="text-muted">Dodano: {item.timestamp}</small>
                      </div>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeItem(item.id)}
                        title="Usuń element"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted py-4">
                  <p className="mb-0">Brak elementów</p>
                  <small>Dodaj pierwszy element używając formularza</small>
                </div>
              )}
            </div>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Skróty klawiaturowe</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <kbd>Enter</kbd>
                    <br />
                    <small className="text-muted">Dodaj element</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <kbd>Escape</kbd>
                    <br />
                    <small className="text-muted">Wyczyść pole</small>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-2">
                <strong>Funkcje:</strong>
                <ul className="list-unstyled small mt-2">
                  <li>• Automatyczne odzyskiwanie fokusa po dodaniu</li>
                  <li>• Walidacja przed dodaniem elementu</li>
                  <li>• Zapobieganie domyślnym zachowaniom klawiszy</li>
                  <li>• Logowanie użytych skrótów w konsoli</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-4">
                  <h5 className="text-primary">{items.length}</h5>
                  <small className="text-muted">Łącznie</small>
                </div>
                <div className="col-4">
                  <h5 className="text-success">
                    {items.filter(item => item.text.length > 10).length}
                  </h5>
                  <small className="text-muted">Długie (>10 znaków)</small>
                </div>
                <div className="col-4">
                  <h5 className="text-info">
                    {items.length > 0 ? Math.round(items.reduce((sum, item) => sum + item.text.length, 0) / items.length) : 0}
                  </h5>
                  <small className="text-muted">Średnia długość</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Console Instructions */}
      <div className="card mt-4">
        <div className="card-header">
          <h6 className="card-title mb-0">Informacje o logowaniu</h6>
        </div>
        <div className="card-body">
          <p className="mb-0">
            <strong>Konsola przeglądarki:</strong> Użycie skrótów klawiaturowych jest logowane w formacie:
            <br />
            <code className="ml-1">"Submit: Enter"</code> - po naciśnięciu Enter
            <br />
            <code className="ml-1">"Clear: Escape"</code> - po naciśnięciu Escape
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
