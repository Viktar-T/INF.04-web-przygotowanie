import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // Parking meter configuration constants
  const BASE_FEE = 2.00 // PLN
  const BLOCK_PRICE = 1.00 // PLN per block
  const BLOCK_DURATION = 30 // minutes per block

  // State for form input and results
  const [minutes, setMinutes] = useState('')
  const [calculationResult, setCalculationResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Handle minutes input change
  const handleMinutesChange = (event) => {
    const value = event.target.value
    setMinutes(value)
    setErrorMessage('') // Clear error when user types
    setCalculationResult(null) // Clear previous result
  }

  // Calculate parking fee
  const calculateParkingFee = () => {
    const minutesNum = parseFloat(minutes)
    
    // Validation
    if (isNaN(minutesNum) || minutesNum < 0) {
      setErrorMessage('Wprowadź poprawną liczbę minut (większą lub równą 0)')
      setCalculationResult(null)
      return
    }

    // Calculate blocks (ceiling division)
    const blocks = Math.ceil(minutesNum / BLOCK_DURATION)
    
    // Calculate total fee
    const totalFee = BASE_FEE + (blocks * BLOCK_PRICE)

    // Create result object
    const result = {
      minutes: minutesNum,
      blocks: blocks,
      totalFee: totalFee
    }

    setCalculationResult(result)
    setErrorMessage('')

    // Log to console as required
    console.log(`Min: ${minutesNum}; Bloki: ${blocks}; Opłata: ${totalFee} PLN`)
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    calculateParkingFee()
  }

  // Reset form
  const handleReset = () => {
    setMinutes('')
    setCalculationResult(null)
    setErrorMessage('')
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Kalkulator opłat parkingowych</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Input Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Oblicz opłatę parkingową</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="minutesInput">Minuty:</label>
                  <input
                    type="number"
                    className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                    id="minutesInput"
                    min="0"
                    step="1"
                    value={minutes}
                    onChange={handleMinutesChange}
                    placeholder="Wprowadź liczbę minut"
                    required
                  />
                  {errorMessage && (
                    <div className="invalid-feedback">
                      {errorMessage}
                    </div>
                  )}
                </div>
                
                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!minutes || minutes.trim() === ''}
                  >
                    Oblicz
                  </button>
                  
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Wyczyść
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Results Display */}
          {calculationResult && (
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Wynik obliczenia</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-center">
                      <h6 className="text-muted">Minuty</h6>
                      <h4 className="text-primary">{calculationResult.minutes}</h4>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <h6 className="text-muted">Bloki</h6>
                      <h4 className="text-info">{calculationResult.blocks}</h4>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <h6 className="text-muted">Opłata</h6>
                      <h4 className="text-success">{calculationResult.totalFee.toFixed(2)} PLN</h4>
                    </div>
                  </div>
                </div>
                
                <hr />
                
                <div className="mt-3">
                  <h6>Szczegóły obliczenia:</h6>
                  <ul className="list-unstyled">
                    <li><strong>Opłata bazowa:</strong> {BASE_FEE.toFixed(2)} PLN</li>
                    <li><strong>Bloki (zaokrąglone w górę):</strong> {calculationResult.blocks} × {BLOCK_PRICE.toFixed(2)} PLN = {(calculationResult.blocks * BLOCK_PRICE).toFixed(2)} PLN</li>
                    <li><strong>Opłata całkowita:</strong> {BASE_FEE.toFixed(2)} + {(calculationResult.blocks * BLOCK_PRICE).toFixed(2)} = {calculationResult.totalFee.toFixed(2)} PLN</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Parking Rules Info */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Zasady naliczania opłat</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li><strong>Opłata bazowa:</strong> {BASE_FEE.toFixed(2)} PLN</li>
                <li><strong>Cena za blok:</strong> {BLOCK_PRICE.toFixed(2)} PLN</li>
                <li><strong>Długość bloku:</strong> {BLOCK_DURATION} minut</li>
                <li><strong>Zaokrąglanie:</strong> Bloki są zaokrąglane w górę (np. 31 minut = 2 bloki)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
