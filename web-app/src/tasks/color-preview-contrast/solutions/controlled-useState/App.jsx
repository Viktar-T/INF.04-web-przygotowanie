import 'bootstrap/dist/css/bootstrap.css'
import { useState, useMemo } from 'react'

function App() {
  // State for color and text inputs
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [text, setText] = useState('Przykładowy tekst')

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  // Calculate relative luminance
  const calculateLuminance = (r, g, b) => {
    // Normalize RGB values to 0-1 range
    const normalize = (value) => {
      value = value / 255
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
    }
    
    return 0.299 * normalize(r) + 0.587 * normalize(g) + 0.114 * normalize(b)
  }

  // Calculate contrast ratio
  const calculateContrast = (bgColor, textColor = { r: 0, g: 0, b: 0 }) => {
    const bgLuminance = calculateLuminance(bgColor.r, bgColor.g, bgColor.b)
    const textLuminance = calculateLuminance(textColor.r, textColor.g, textColor.b)
    
    const lighter = Math.max(bgLuminance, textLuminance)
    const darker = Math.min(bgLuminance, textLuminance)
    
    return (lighter + 0.05) / (darker + 0.05)
  }

  // Get contrast status and color info
  const contrastInfo = useMemo(() => {
    const rgb = hexToRgb(backgroundColor)
    if (!rgb) return { contrast: 0, status: 'Błąd', badgeClass: 'badge-danger' }
    
    const contrast = calculateContrast(rgb)
    const status = contrast >= 4.5 ? 'OK' : 'Niski kontrast'
    const badgeClass = contrast >= 4.5 ? 'badge-success' : 'badge-warning'
    
    return {
      contrast: contrast.toFixed(2),
      status,
      badgeClass,
      rgb
    }
  }, [backgroundColor])

  // Handle background color change
  const handleBackgroundColorChange = (event) => {
    const color = event.target.value
    setBackgroundColor(color)
    
    // Log contrast information
    const rgb = hexToRgb(color)
    if (rgb) {
      const contrast = calculateContrast(rgb)
      const status = contrast >= 4.5 ? 'OK' : 'Niski kontrast'
      console.log(`Kontrast: ${contrast.toFixed(2)} - ${status}`)
    }
  }

  // Handle text change
  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  // Get text color based on background luminance
  const getTextColor = () => {
    const rgb = hexToRgb(backgroundColor)
    if (!rgb) return '#000000'
    
    const luminance = calculateLuminance(rgb.r, rgb.g, rgb.b)
    return luminance > 0.5 ? '#000000' : '#ffffff'
  }

  // Get contrast description
  const getContrastDescription = (contrast) => {
    const ratio = parseFloat(contrast)
    if (ratio >= 7) return 'Bardzo dobry kontrast'
    if (ratio >= 4.5) return 'Dobry kontrast'
    if (ratio >= 3) return 'Umiarkowany kontrast'
    return 'Słaby kontrast'
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Podgląd kolorów z wskaźnikiem kontrastu</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Color Input Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Ustawienia koloru</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="backgroundColorInput">Kolor tła:</label>
                <div className="input-group">
                  <input
                    type="color"
                    className="form-control"
                    id="backgroundColorInput"
                    value={backgroundColor}
                    onChange={handleBackgroundColorChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    placeholder="#RRGGBB"
                  />
                </div>
                <small className="text-muted">
                  Wybierz kolor z palety lub wpisz kod hex
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="textInput">Tekst:</label>
                <input
                  type="text"
                  className="form-control"
                  id="textInput"
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Wprowadź tekst do wyświetlenia..."
                />
              </div>
            </div>
          </div>

          {/* Contrast Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Informacje o kontraście</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <strong>Współczynnik kontrastu:</strong>
                  <h4 className="text-primary">{contrastInfo.contrast}</h4>
                </div>
                <div className="col-6">
                  <strong>Status:</strong>
                  <div className="mt-1">
                    <span className={`badge ${contrastInfo.badgeClass} badge-lg`}>
                      {contrastInfo.status}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mb-2">
                <strong>Opis:</strong>
                <p className="mb-0">{getContrastDescription(contrastInfo.contrast)}</p>
              </div>
              <div className="mb-2">
                <strong>RGB:</strong>
                <span className="badge badge-info ml-2">
                  R: {contrastInfo.rgb?.r || 0}, G: {contrastInfo.rgb?.g || 0}, B: {contrastInfo.rgb?.b || 0}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Color Preview */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Podgląd</h6>
            </div>
            <div 
              className="card-body text-center"
              style={{
                backgroundColor: backgroundColor,
                color: getTextColor(),
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h4 className="mb-3">{text}</h4>
              <p className="mb-0">Tło: {backgroundColor}</p>
              <p className="mb-0">Tekst: {getTextColor()}</p>
            </div>
          </div>

          {/* Accessibility Guidelines */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Wytyczne dostępności</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Poziom</th>
                      <th>Współczynnik</th>
                      <th>Opis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={parseFloat(contrastInfo.contrast) >= 7 ? 'table-success' : ''}>
                      <td>AAA</td>
                      <td>≥ 7.0</td>
                      <td>Najwyższy poziom</td>
                    </tr>
                    <tr className={parseFloat(contrastInfo.contrast) >= 4.5 ? 'table-success' : ''}>
                      <td>AA</td>
                      <td>≥ 4.5</td>
                      <td>Minimalny poziom</td>
                    </tr>
                    <tr className={parseFloat(contrastInfo.contrast) >= 3 ? 'table-warning' : 'table-danger'}>
                      <td>Nieodpowiedni</td>
                        <td>&lt; 3.0</td>
                      <td>Niewystarczający</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Color Examples */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Przykłady kolorów</h6>
            </div>
            <div className="card-body">
              <div className="row">
                {[
                  { color: '#ffffff', name: 'Biały' },
                  { color: '#000000', name: 'Czarny' },
                  { color: '#ff0000', name: 'Czerwony' },
                  { color: '#00ff00', name: 'Zielony' },
                  { color: '#0000ff', name: 'Niebieski' },
                  { color: '#ffff00', name: 'Żółty' }
                ].map((example) => (
                  <div key={example.color} className="col-6 mb-2">
                    <button
                      className="btn btn-sm btn-outline-secondary w-100"
                      onClick={() => setBackgroundColor(example.color)}
                      style={{ backgroundColor: example.color, color: example.color === '#ffffff' ? '#000000' : '#ffffff' }}
                    >
                      {example.name}
                    </button>
                  </div>
                ))}
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
            <strong>Konsola przeglądarki:</strong> Każda zmiana koloru tła jest logowana w formacie:
            <br />
            <code className="ml-1">"Kontrast: {wartość} - {status}"</code>
            <br />
            gdzie wartość to współczynnik kontrastu, status to "OK" lub "Niski kontrast".
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
