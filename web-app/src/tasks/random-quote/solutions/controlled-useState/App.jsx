import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Static quotes array
  const quotes = [
    "Sukces to suma małych wysiłków powtarzanych dzień po dniu.",
    "Nie ma nic niemożliwego dla tego, kto próbuje.",
    "Przyszłość należy do tych, którzy wierzą w piękno swoich marzeń.",
    "Jedynym sposobem na zrobienie świetnej pracy jest kochanie tego, co robisz.",
    "Nie bój się porzucać dobrego, aby dążyć do lepszego.",
    "Innowacja odróżnia lidera od naśladowcy.",
    "Najlepszy czas na zasadzenie drzewa był 20 lat temu. Drugi najlepszy czas to teraz.",
    "Sukces nie jest kluczem do szczęścia. Szczęście jest kluczem do sukcesu."
  ]

  // State for current quote index
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  
  // State for view counts (array of numbers)
  const [viewCounts, setViewCounts] = useState(new Array(quotes.length).fill(0))
  
  // State for viewed quotes (set of indices)
  const [viewedQuotes, setViewedQuotes] = useState(new Set([0]))

  // Initialize view count for first quote
  useEffect(() => {
    const newViewCounts = [...viewCounts]
    newViewCounts[0] = 1
    setViewCounts(newViewCounts)
    console.log('Quote: 0')
  }, [])

  // Get random index excluding current one
  const getRandomIndex = (excludeIndex) => {
    if (quotes.length <= 1) return excludeIndex
    
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * quotes.length)
    } while (randomIndex === excludeIndex)
    
    return randomIndex
  }

  // Show next quote
  const showNextQuote = () => {
    const nextIndex = getRandomIndex(currentQuoteIndex)
    
    // Update current quote index
    setCurrentQuoteIndex(nextIndex)
    
    // Update view counts
    const newViewCounts = [...viewCounts]
    newViewCounts[nextIndex] += 1
    setViewCounts(newViewCounts)
    
    // Update viewed quotes set
    setViewedQuotes(prev => new Set([...prev, nextIndex]))
    
    // Log to console
    console.log(`Quote: ${nextIndex}`)
  }

  // Get maximum view count
  const getMaxViewCount = () => {
    return Math.max(...viewCounts)
  }

  // Get quotes with maximum view count
  const getMostViewedQuotes = () => {
    const maxCount = getMaxViewCount()
    return viewCounts
      .map((count, index) => ({ index, count }))
      .filter(item => item.count === maxCount)
      .map(item => item.index)
  }

  // Calculate statistics
  const getTotalViews = () => {
    return viewCounts.reduce((sum, count) => sum + count, 0)
  }

  const getAverageViews = () => {
    const total = getTotalViews()
    return quotes.length > 0 ? (total / quotes.length).toFixed(1) : 0
  }

  const getUniqueViewedCount = () => {
    return viewedQuotes.size
  }

  // Check if button should be disabled
  const isButtonDisabled = () => {
    return quotes.length <= 1
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Losowe cytaty</h2>
      
      <div className="row">
        <div className="col-md-8">
          {/* Current Quote Display */}
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Aktualny cytat</h5>
              <span className="badge bg-primary">
                Cytat #{currentQuoteIndex + 1}
              </span>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-3">
                <p className="mb-0">"{quotes[currentQuoteIndex]}"</p>
              </blockquote>
              
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted">
                    Wyświetleń: <strong>{viewCounts[currentQuoteIndex]}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={showNextQuote}
                  disabled={isButtonDisabled()}
                >
                  Następny
                </button>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-4">
                  <h5 className="text-primary">{getTotalViews()}</h5>
                  <small className="text-muted">Łączne wyświetlenia</small>
                </div>
                <div className="col-4">
                  <h5 className="text-success">{getAverageViews()}</h5>
                  <small className="text-muted">Średnia na cytat</small>
                </div>
                <div className="col-4">
                  <h5 className="text-info">{getUniqueViewedCount()}</h5>
                  <small className="text-muted">Unikalne cytaty</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* All Quotes List */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Wszystkie cytaty</h6>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                {quotes.map((quote, index) => {
                  const isMostViewed = getMostViewedQuotes().includes(index)
                  const isCurrent = index === currentQuoteIndex
                  
                  return (
                    <div
                      key={index}
                      className={`list-group-item d-flex justify-content-between align-items-start ${
                        isCurrent ? 'bg-primary text-white' : ''
                      }`}
                    >
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                          <span className="font-weight-bold me-2">#{index + 1}</span>
                          {isMostViewed && (
                            <span className="badge bg-warning me-1">Najczęściej</span>
                          )}
                          {isCurrent && (
                            <span className="badge bg-light text-dark">Aktualny</span>
                          )}
                        </div>
                        <p className="mb-1 small">
                          {quote.length > 50 ? `${quote.substring(0, 50)}...` : quote}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`badge ${
                          isCurrent ? 'bg-light text-dark' : 'bg-secondary'
                        }`}>
                          {viewCounts[index]}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Most Viewed Quotes */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Najczęściej wyświetlane</h6>
            </div>
            <div className="card-body">
              {getMostViewedQuotes().length > 0 ? (
                <div>
                  <p className="small text-muted mb-2">
                    Cytaty z {getMaxViewCount()} wyświetleniami:
                  </p>
                  {getMostViewedQuotes().map(index => (
                    <div key={index} className="mb-2">
                      <span className="badge bg-warning me-2">#{index + 1}</span>
                      <small>{quotes[index].substring(0, 40)}...</small>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="small text-muted mb-0">Brak danych</p>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="small mb-0">
                <li>Kliknij "Następny" aby wyświetlić losowy cytat</li>
                <li>Cytat nie może się powtórzyć bezpośrednio</li>
                <li>Każde wyświetlenie zwiększa licznik</li>
                <li>Najczęściej wyświetlane cytaty są wyróżnione</li>
                <li>Sprawdź konsolę aby zobaczyć logi indeksów</li>
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
            <strong>Konsola przeglądarki:</strong> Za każdym razem gdy wyświetlany jest cytat, logowany jest jego indeks:
            <br />
            <code className="ms-1">"Quote: i"</code> - gdzie i to indeks cytatu (0, 1, 2, ...)
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
