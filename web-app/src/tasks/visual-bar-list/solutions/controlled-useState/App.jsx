import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // Initial data with labels and percentage values
  const [items, setItems] = useState([
    { id: 1, label: 'Projekt A', valuePercent: 75 },
    { id: 2, label: 'Projekt B', valuePercent: 45 },
    { id: 3, label: 'Projekt C', valuePercent: 90 },
    { id: 4, label: 'Projekt D', valuePercent: 30 },
    { id: 5, label: 'Projekt E', valuePercent: 60 },
    { id: 6, label: 'Projekt F', valuePercent: 85 }
  ])

  // State for selected item
  const [selectedItemId, setSelectedItemId] = useState(null)
  
  // State for update form
  const [updateValue, setUpdateValue] = useState('')
  const [updateError, setUpdateError] = useState('')

  // Color palette for bars
  const colors = [
    '#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1'
  ]

  // Handle bar click
  const handleBarClick = (item) => {
    setSelectedItemId(item.id)
    setUpdateValue(item.valuePercent.toString())
    setUpdateError('')
    console.log(`Klik: ${item.label}=${item.valuePercent}`)
  }

  // Handle update value change
  const handleUpdateValueChange = (event) => {
    const value = event.target.value
    setUpdateValue(value)
    setUpdateError('')
  }

  // Validate update value
  const validateUpdateValue = (value) => {
    const numValue = parseInt(value)
    if (isNaN(numValue)) {
      return 'Wartość musi być liczbą'
    }
    if (numValue < 0 || numValue > 100) {
      return 'Wartość musi być między 0 a 100'
    }
    return ''
  }

  // Update selected item value
  const updateSelectedItem = () => {
    const error = validateUpdateValue(updateValue)
    if (error) {
      setUpdateError(error)
      return
    }

    const newValue = parseInt(updateValue)
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === selectedItemId 
          ? { ...item, valuePercent: newValue }
          : item
      )
    )
    
    setUpdateError('')
    console.log(`Zaktualizowano: ${items.find(item => item.id === selectedItemId)?.label}=${newValue}`)
  }

  // Calculate statistics
  const getStatistics = () => {
    const values = items.map(item => item.valuePercent)
    const sum = values.reduce((acc, val) => acc + val, 0)
    const average = sum / values.length
    const max = Math.max(...values)
    const min = Math.min(...values)
    
    return { sum, average: average.toFixed(1), max, min, count: values.length }
  }

  // Get selected item
  const getSelectedItem = () => {
    return items.find(item => item.id === selectedItemId)
  }

  // Clear selection
  const clearSelection = () => {
    setSelectedItemId(null)
    setUpdateValue('')
    setUpdateError('')
  }

  const stats = getStatistics()
  const selectedItem = getSelectedItem()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista pasków wizualnych</h2>
      
      <div className="row">
        <div className="col-md-8">
          {/* Visual Bars List */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Elementy z paskami procentowymi</h5>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`list-group-item ${
                      selectedItemId === item.id ? 'bg-primary text-white' : ''
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <h6 className="mb-0">{item.label}</h6>
                        <small className="text-muted">
                          {item.valuePercent}%
                        </small>
                      </div>
                      <div className="text-right">
                        <span className={`badge ${
                          selectedItemId === item.id ? 'bg-light text-dark' : 'bg-secondary'
                        }`}>
                          #{item.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Visual Bar */}
                    <div 
                      className="progress mb-2" 
                      style={{ height: '20px', cursor: 'pointer' }}
                      onClick={() => handleBarClick(item)}
                      role="button"
                      tabIndex="0"
                      aria-label={`Kliknij aby wybrać ${item.label}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleBarClick(item)
                        }
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ 
                          width: `${item.valuePercent}%`,
                          backgroundColor: colors[index % colors.length],
                          transition: 'width 0.3s ease-in-out'
                        }}
                        aria-valuenow={item.valuePercent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${item.label}: ${item.valuePercent}%`}
                      >
                        <span className="sr-only">{item.valuePercent}%</span>
                      </div>
                    </div>
                    
                    {/* Click instruction */}
                    <small className="text-muted">
                      Kliknij w pasek aby wybrać element
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Update Form */}
          {selectedItem && (
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="card-title mb-0">
                  Aktualizuj: {selectedItem.label}
                </h6>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={clearSelection}
                >
                  Anuluj
                </button>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => { e.preventDefault(); updateSelectedItem(); }}>
                  <div className="form-group">
                    <label htmlFor="updateValue">
                      Nowa wartość procentowa (0-100):
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className={`form-control ${updateError ? 'is-invalid' : ''}`}
                        id="updateValue"
                        value={updateValue}
                        onChange={handleUpdateValueChange}
                        min="0"
                        max="100"
                        placeholder="Wprowadź wartość"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">%</span>
                      </div>
                      {updateError && (
                        <div className="invalid-feedback">{updateError}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!updateValue || updateError}
                    >
                      Aktualizuj
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="col-md-4">
          {/* Statistics */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6 mb-3">
                  <h5 className="text-primary">{stats.count}</h5>
                  <small className="text-muted">Elementów</small>
                </div>
                <div className="col-6 mb-3">
                  <h5 className="text-success">{stats.sum}</h5>
                  <small className="text-muted">Suma</small>
                </div>
                <div className="col-6 mb-3">
                  <h5 className="text-info">{stats.average}</h5>
                  <small className="text-muted">Średnia</small>
                </div>
                <div className="col-6 mb-3">
                  <h5 className="text-warning">{stats.max}</h5>
                  <small className="text-muted">Maksimum</small>
                </div>
                <div className="col-6">
                  <h5 className="text-danger">{stats.min}</h5>
                  <small className="text-muted">Minimum</small>
                </div>
                <div className="col-6">
                  <h5 className="text-secondary">
                    {stats.sum > 0 ? Math.round((stats.sum / (stats.count * 100)) * 100) : 0}%
                  </h5>
                  <small className="text-muted">Wypełnienie</small>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Item Info */}
          {selectedItem && (
            <div className="card mb-4">
              <div className="card-header">
                <h6 className="card-title mb-0">Wybrany element</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <h5 className="text-primary">{selectedItem.label}</h5>
                  <div className="mb-3">
                    <span className="badge bg-primary" style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}>
                      {selectedItem.valuePercent}%
                    </span>
                  </div>
                  <div className="progress mb-3" style={{ height: '15px' }}>
                    <div
                      className="progress-bar"
                      style={{ 
                        width: `${selectedItem.valuePercent}%`,
                        backgroundColor: colors[items.findIndex(item => item.id === selectedItem.id) % colors.length]
                      }}
                    ></div>
                  </div>
                  <p className="small text-muted mb-0">
                    Kliknij w pasek aby wybrać inny element
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="small mb-0">
                <li>Kliknij w pasek aby wybrać element</li>
                <li>Wprowadź nową wartość (0-100)</li>
                <li>Kliknij "Aktualizuj" aby zapisać</li>
                <li>Paski aktualizują się automatycznie</li>
                <li>Sprawdź konsolę aby zobaczyć logi</li>
              </ul>
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
            <strong>Konsola przeglądarki:</strong> Po kliknięciu w pasek logowana jest nazwa i wartość elementu:
            <br />
            <code className="ms-1">"Klik: label=value"</code> - gdzie label to nazwa, value to wartość procentowa
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
