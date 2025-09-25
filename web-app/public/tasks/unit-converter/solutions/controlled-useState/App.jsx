import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // State for temperature values
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const [lastConversion, setLastConversion] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  // Conversion functions
  const celsiusToFahrenheit = (c) => {
    return (c * 9/5 + 32).toFixed(1)
  }

  const fahrenheitToCelsius = (f) => {
    return ((f - 32) * 5/9).toFixed(1)
  }

  // Handle Celsius input change
  const handleCelsiusChange = (event) => {
    const value = event.target.value
    setCelsius(value)
    
    // Prevent feedback loops
    if (isUpdating) return
    
    // Handle empty input
    if (value === '') {
      setFahrenheit('')
      setLastConversion('')
      return
    }
    
    // Validate input
    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      return
    }
    
    // Convert to Fahrenheit
    const fValue = celsiusToFahrenheit(numValue)
    setIsUpdating(true)
    setFahrenheit(fValue)
    setLastConversion(`C→F: ${value} → ${fValue}`)
    console.log(`C→F: ${value} → ${fValue}`)
    setIsUpdating(false)
  }

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (event) => {
    const value = event.target.value
    setFahrenheit(value)
    
    // Prevent feedback loops
    if (isUpdating) return
    
    // Handle empty input
    if (value === '') {
      setCelsius('')
      setLastConversion('')
      return
    }
    
    // Validate input
    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      return
    }
    
    // Convert to Celsius
    const cValue = fahrenheitToCelsius(numValue)
    setIsUpdating(true)
    setCelsius(cValue)
    setLastConversion(`F→C: ${value} → ${cValue}`)
    console.log(`F→C: ${value} → ${cValue}`)
    setIsUpdating(false)
  }

  // Clear both inputs
  const handleClear = () => {
    setCelsius('')
    setFahrenheit('')
    setLastConversion('')
  }

  // Get temperature description
  const getTemperatureDescription = (temp, unit) => {
    const numTemp = parseFloat(temp)
    if (isNaN(numTemp)) return ''
    
    if (unit === 'C') {
      if (numTemp < 0) return 'Mróz'
      if (numTemp < 10) return 'Zimno'
      if (numTemp < 20) return 'Chłodno'
      if (numTemp < 30) return 'Ciepło'
      return 'Gorąco'
    } else {
      if (numTemp < 32) return 'Mróz'
      if (numTemp < 50) return 'Zimno'
      if (numTemp < 68) return 'Chłodno'
      if (numTemp < 86) return 'Ciepło'
      return 'Gorąco'
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Konwerter temperatury °C ↔ °F</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Converter Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Konwerter</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="celsiusInput">Celsjusz (°C):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="celsiusInput"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    placeholder="Wprowadź temperaturę w °C..."
                    step="0.1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">°C</span>
                  </div>
                </div>
                {celsius && !isNaN(parseFloat(celsius)) && (
                  <small className="text-muted">
                    {getTemperatureDescription(celsius, 'C')}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="fahrenheitInput">Fahrenheit (°F):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="fahrenheitInput"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    placeholder="Wprowadź temperaturę w °F..."
                    step="0.1"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">°F</span>
                  </div>
                </div>
                {fahrenheit && !isNaN(parseFloat(fahrenheit)) && (
                  <small className="text-muted">
                    {getTemperatureDescription(fahrenheit, 'F')}
                  </small>
                )}
              </div>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClear}
              >
                Wyczyść
              </button>
            </div>
          </div>

          {/* Last Conversion */}
          {lastConversion && (
            <div className="alert alert-info" role="alert">
              <h6 className="alert-heading">Ostatnia konwersja:</h6>
              <p className="mb-0">
                <strong>{lastConversion}</strong>
              </p>
              <hr />
              <p className="mb-0">
                Sprawdź konsolę przeglądarki aby zobaczyć wszystkie logi.
              </p>
            </div>
          )}
        </div>

        <div className="col-md-6">
          {/* Conversion Formulas */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Wzory konwersji</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6>Celsjusz → Fahrenheit:</h6>
                <code>F = C × 9/5 + 32</code>
              </div>
              <div className="mb-3">
                <h6>Fahrenheit → Celsjusz:</h6>
                <code>C = (F - 32) × 5/9</code>
              </div>
              <div>
                <h6>Zaokrąglanie:</h6>
                <code>Wyniki zaokrąglane do 1 miejsca po przecinku</code>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Przykłady konwersji</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>°C</th>
                      <th>°F</th>
                      <th>Opis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>32</td>
                      <td>Punkt zamarzania wody</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>68</td>
                      <td>Pokojowa temperatura</td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td>98.6</td>
                      <td>Temperatura ciała</td>
                    </tr>
                    <tr>
                      <td>100</td>
                      <td>212</td>
                      <td>Punkt wrzenia wody</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Temperature Ranges */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Zakresy temperatur</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <h6 className="text-primary">Celsjusz</h6>
                  <ul className="list-unstyled small">
                    <li>&lt; 0°C - Mróz</li>
                    <li>0-10°C - Zimno</li>
                    <li>10-20°C - Chłodno</li>
                    <li>20-30°C - Ciepło</li>
                    <li>&gt; 30°C - Gorąco</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="text-warning">Fahrenheit</h6>
                  <ul className="list-unstyled small">
                    <li>&lt; 32°F - Mróz</li>
                    <li>32-50°F - Zimno</li>
                    <li>50-68°F - Chłodno</li>
                    <li>68-86°F - Ciepło</li>
                    <li>&gt; 86°F - Gorąco</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Values Display */}
      <div className="card mt-4">
        <div className="card-header">
          <h6 className="card-title mb-0">Aktualne wartości</h6>
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="text-primary">
                {celsius || '-'}°C
              </h5>
              <small className="text-muted">Celsjusz</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-warning">
                {fahrenheit || '-'}°F
              </h5>
              <small className="text-muted">Fahrenheit</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-info">
                {celsius && fahrenheit ? '✓' : '○'}
              </h5>
              <small className="text-muted">Synchronizacja</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-success">
                {lastConversion ? '✓' : '○'}
              </h5>
              <small className="text-muted">Konwersja</small>
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
            <strong>Konsola przeglądarki:</strong> Każda konwersja jest logowana w formacie:
            <br />
            <code className="ml-1">"C→F: 20 → 68"</code> lub <code className="ml-1">"F→C: 86 → 30"</code>
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
