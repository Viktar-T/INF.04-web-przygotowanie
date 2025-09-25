import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // State for rating management
  const [currentRating, setCurrentRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [isKeyboardMode, setIsKeyboardMode] = useState(false)
  const [ratingHistory, setRatingHistory] = useState([])

  // Load data from localStorage on mount
  useEffect(() => {
    const savedRating = localStorage.getItem('starRating')
    const savedHistory = localStorage.getItem('starRatingHistory')
    
    if (savedRating) {
      setCurrentRating(parseInt(savedRating) || 0)
    }
    
    if (savedHistory) {
      try {
        const historyArray = JSON.parse(savedHistory)
        setRatingHistory(historyArray)
      } catch (error) {
        console.error('Error loading rating history from localStorage:', error)
      }
    }
  }, [])

  // Save current rating to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('starRating', currentRating.toString())
  }, [currentRating])

  // Save rating history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('starRatingHistory', JSON.stringify(ratingHistory))
  }, [ratingHistory])

  // Handle star click
  const handleStarClick = (rating) => {
    setCurrentRating(rating)
    console.log(`Ocena: ${rating}`)
    
    // Add to history
    const historyRecord = {
      id: Date.now(),
      rating: rating,
      timestamp: new Date().toLocaleString()
    }
    setRatingHistory(prev => [...prev, historyRecord])
  }

  // Handle star hover
  const handleStarHover = (rating) => {
    setHoverRating(rating)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  // Handle clear rating
  const handleClearRating = () => {
    setCurrentRating(0)
    console.log('Ocena: 0')
    
    // Add clear action to history
    const historyRecord = {
      id: Date.now(),
      rating: 0,
      timestamp: new Date().toLocaleString(),
      action: 'cleared'
    }
    setRatingHistory(prev => [...prev, historyRecord])
  }

  // Clear rating history
  const clearRatingHistory = () => {
    if (window.confirm('Czy na pewno chcesz wyczyścić historię ocen?')) {
      setRatingHistory([])
      console.log("Historia ocen wyczyszczona")
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (!isKeyboardMode) return

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        if (currentRating > 1) {
          const newRating = currentRating - 1
          setCurrentRating(newRating)
          console.log(`Ocena: ${newRating}`)
          
          // Add to history
          const historyRecord = {
            id: Date.now(),
            rating: newRating,
            timestamp: new Date().toLocaleString(),
            action: 'keyboard'
          }
          setRatingHistory(prev => [...prev, historyRecord])
        }
        break
      case 'ArrowRight':
        event.preventDefault()
        if (currentRating < 5) {
          const newRating = currentRating + 1
          setCurrentRating(newRating)
          console.log(`Ocena: ${newRating}`)
          
          // Add to history
          const historyRecord = {
            id: Date.now(),
            rating: newRating,
            timestamp: new Date().toLocaleString(),
            action: 'keyboard'
          }
          setRatingHistory(prev => [...prev, historyRecord])
        }
        break
      case 'Enter':
        event.preventDefault()
        console.log(`Ocena: ${currentRating}`)
        break
      case 'Escape':
        event.preventDefault()
        handleClearRating()
        break
      default:
        break
    }
  }

  // Handle focus to enable keyboard mode
  const handleFocus = () => {
    setIsKeyboardMode(true)
  }

  // Handle blur to disable keyboard mode
  const handleBlur = () => {
    setIsKeyboardMode(false)
  }

  // Set up keyboard event listener
  useEffect(() => {
    if (isKeyboardMode) {
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isKeyboardMode, currentRating])

  // Get star class based on rating
  const getStarClass = (starIndex) => {
    const displayRating = hoverRating > 0 ? hoverRating : currentRating
    return starIndex <= displayRating ? 'text-warning' : 'text-muted'
  }

  // Get star icon
  const getStarIcon = (starIndex) => {
    const displayRating = hoverRating > 0 ? hoverRating : currentRating
    return starIndex <= displayRating ? '★' : '☆'
  }

  // Get rating description
  const getRatingDescription = (rating) => {
    switch (rating) {
      case 1:
        return 'Bardzo słaba'
      case 2:
        return 'Słaba'
      case 3:
        return 'Przeciętna'
      case 4:
        return 'Dobra'
      case 5:
        return 'Bardzo dobra'
      default:
        return 'Brak oceny'
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Widget oceniania gwiazdkami (Zaawansowany)</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Instructions */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Instrukcje użytkowania</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li>• <strong>Mysz:</strong> Najedź na gwiazdkę aby zobaczyć podgląd, kliknij aby ustawić ocenę</li>
                <li>• <strong>Klawiatura:</strong> Użyj strzałek ← → aby zmienić ocenę, Enter aby potwierdzić, Escape aby wyczyścić</li>
                <li>• <strong>Przycisk:</strong> Użyj "Wyczyść ocenę" aby zresetować ocenę do 0</li>
                <li>• <strong>Dostępność:</strong> Widget jest w pełni dostępny dla czytników ekranu</li>
              </ul>
            </div>
          </div>

          {/* Star Rating Widget */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Oceń produkt</h5>
            </div>
            <div className="card-body text-center">
              <div 
                className="star-rating-widget mb-3"
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex="0"
                role="radiogroup"
                aria-label="Ocena produktu od 1 do 5 gwiazdek"
              >
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <button
                    key={starIndex}
                    type="button"
                    className={`btn btn-link p-2 star-button ${getStarClass(starIndex)}`}
                    onClick={() => handleStarClick(starIndex)}
                    onMouseEnter={() => handleStarHover(starIndex)}
                    aria-label={`Oceń na ${starIndex} ${starIndex === 1 ? 'gwiazdkę' : 'gwiazdki'}`}
                    role="radio"
                    aria-checked={currentRating === starIndex}
                    style={{ fontSize: '2rem', border: 'none', background: 'none' }}
                  >
                    <span className="star-icon" style={{ fontSize: '2rem' }}>
                      {getStarIcon(starIndex)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Current Rating Display */}
              <div className="rating-display mb-3">
                <h4 className="mb-2">
                  <span className="badge badge-primary badge-lg" style={{ fontSize: '1.5rem', padding: '0.5rem 1rem' }}>
                    Ocena: {currentRating}
                  </span>
                </h4>
                <p className="text-muted mb-0">
                  {getRatingDescription(currentRating)}
                </p>
              </div>

              {/* Clear Rating Button */}
              <div className="mb-3">
                <button
                  className="btn btn-warning"
                  onClick={handleClearRating}
                  disabled={currentRating === 0}
                >
                  Wyczyść ocenę
                </button>
              </div>

              {/* Preview Rating (when hovering) */}
              {hoverRating > 0 && hoverRating !== currentRating && (
                <div className="preview-rating">
                  <small className="text-info">
                    Podgląd: {hoverRating} {getRatingDescription(hoverRating)}
                  </small>
                </div>
              )}
            </div>
          </div>

          {/* Rating History */}
          {ratingHistory.length > 0 && (
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Historia ocen</h5>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearRatingHistory}
                >
                  Wyczyść historię
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ocena</th>
                        <th scope="col">Akcja</th>
                        <th scope="col">Data i Czas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ratingHistory.map((record, index) => (
                        <tr key={record.id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <span className="badge badge-primary">{record.rating}</span>
                          </td>
                          <td>
                            <span className="badge badge-info">
                              {record.action === 'cleared' ? 'Wyczyszczono' : 
                               record.action === 'keyboard' ? 'Klawiatura' : 'Kliknięcie'}
                            </span>
                          </td>
                          <td>{record.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Rating Statistics */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki ocen</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-3">
                  <h5 className="text-primary">{currentRating}</h5>
                  <small className="text-muted">Aktualna</small>
                </div>
                <div className="col-3">
                  <h5 className="text-info">{hoverRating || '-'}</h5>
                  <small className="text-muted">Podgląd</small>
                </div>
                <div className="col-3">
                  <h5 className="text-success">{currentRating > 0 ? 'Tak' : 'Nie'}</h5>
                  <small className="text-muted">Oceniono</small>
                </div>
                <div className="col-3">
                  <h5 className="text-warning">{ratingHistory.length}</h5>
                  <small className="text-muted">Zmiany</small>
                </div>
              </div>
            </div>
          </div>

          {/* Keyboard Help */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Obsługa klawiatury</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Nawigacja:</h6>
                  <ul className="list-unstyled">
                    <li><kbd>←</kbd> Zmniejsz ocenę</li>
                    <li><kbd>→</kbd> Zwiększ ocenę</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Akcje:</h6>
                  <ul className="list-unstyled">
                    <li><kbd>Enter</kbd> Potwierdź ocenę</li>
                    <li><kbd>Escape</kbd> Wyczyść ocenę</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3">
                <small className="text-muted">
                  <strong>Wskazówka:</strong> Kliknij na widget aby aktywować tryb klawiatury, 
                  następnie użyj strzałek do nawigacji.
                </small>
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
            <strong>Konsola przeglądarki:</strong> Wszystkie zmiany oceny są logowane w formacie 
            <code className="ml-1">"Ocena: N"</code> gdzie N to wartość od 0 do 5.
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
