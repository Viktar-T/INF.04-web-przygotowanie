import 'bootstrap/dist/css/bootstrap.css'
import { useState, useMemo } from 'react'

function App() {
  // Static data - countries with their cities (including some countries with no cities)
  const countriesData = [
    {
      country: 'Polska',
      cities: ['Warszawa', 'Kraków', 'Gdańsk', 'Wrocław', 'Poznań', 'Łódź', 'Katowice', 'Lublin']
    },
    {
      country: 'Niemcy',
      cities: ['Berlin', 'Monachium', 'Hamburg', 'Frankfurt', 'Kolonia', 'Stuttgart', 'Düsseldorf', 'Dortmund']
    },
    {
      country: 'Francja',
      cities: ['Paryż', 'Marsylia', 'Lyon', 'Tuluza', 'Nicea', 'Nantes', 'Strasburg', 'Montpellier']
    },
    {
      country: 'Włochy',
      cities: ['Rzym', 'Mediolan', 'Neapol', 'Turyn', 'Palermo', 'Genua', 'Bologna', 'Florencja']
    },
    {
      country: 'Hiszpania',
      cities: ['Madryt', 'Barcelona', 'Sewilla', 'Walencja', 'Bilbao', 'Malaga', 'Murcja', 'Palma']
    },
    {
      country: 'Wielka Brytania',
      cities: ['Londyn', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Edynburg', 'Bristol']
    },
    {
      country: 'Holandia',
      cities: ['Amsterdam', 'Rotterdam', 'Haga', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere']
    },
    {
      country: 'Belgia',
      cities: ['Bruksela', 'Antwerpia', 'Gandawa', 'Charleroi', 'Liège', 'Brugia', 'Namur', 'Leuven']
    },
    {
      country: 'Monako',
      cities: [] // Country with no cities
    },
    {
      country: 'San Marino',
      cities: [] // Country with no cities
    }
  ]

  // State for form inputs
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Get available cities for selected country
  const availableCities = useMemo(() => {
    if (!selectedCountry) return []
    const countryData = countriesData.find(c => c.country === selectedCountry)
    return countryData ? countryData.cities : []
  }, [selectedCountry])

  // Check if selected country has no cities
  const hasNoCities = selectedCountry && availableCities.length === 0

  // Handle country selection
  const handleCountryChange = (event) => {
    const country = event.target.value
    setSelectedCountry(country)
    setSelectedCity('') // Reset city when country changes
    setShowSuccessMessage(false) // Hide success message
  }

  // Handle city selection
  const handleCityChange = (event) => {
    const city = event.target.value
    setSelectedCity(city)
    setShowSuccessMessage(false) // Hide success message
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // Validation - country must be selected
    if (!selectedCountry) {
      return
    }

    // If country has no cities, allow submission with city: null
    if (hasNoCities) {
      console.log({ country: selectedCountry, city: null })
    } else {
      // If country has cities, city must be selected
      if (!selectedCity) {
        return
      }
      console.log({ country: selectedCountry, city: selectedCity })
    }
    
    // Show success message
    setShowSuccessMessage(true)
  }

  // Check if form is valid
  const isFormValid = selectedCountry && (hasNoCities || selectedCity)

  // Get country info for display
  const getCountryInfo = () => {
    if (!selectedCountry) return null
    const countryData = countriesData.find(c => c.country === selectedCountry)
    return countryData
  }

  const countryInfo = getCountryInfo()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Wybór kraju i miasta (Zaawansowany)</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Selection Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Formularz wyboru</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="countrySelect">Kraj:</label>
                  <select
                    id="countrySelect"
                    className="form-control"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required
                  >
                    <option value="">Wybierz kraj...</option>
                    {countriesData.map((countryData) => (
                      <option key={countryData.country} value={countryData.country}>
                        {countryData.country}
                        {countryData.cities.length === 0 && ' (bez miast)'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="citySelect">Miasto:</label>
                  <select
                    id="citySelect"
                    className="form-control"
                    value={selectedCity}
                    onChange={handleCityChange}
                    disabled={!selectedCountry || hasNoCities}
                    required={!hasNoCities}
                  >
                    <option value="">
                      {!selectedCountry 
                        ? 'Najpierw wybierz kraj...' 
                        : hasNoCities
                          ? 'Ten kraj nie ma miast'
                          : availableCities.length === 0 
                            ? 'Brak dostępnych miast' 
                            : 'Wybierz miasto...'
                      }
                    </option>
                    {availableCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isFormValid}
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>

          {/* No Cities Alert */}
          {hasNoCities && (
            <div className="alert alert-info" role="alert">
              <h6 className="alert-heading">Informacja</h6>
              <p className="mb-0">
                Wybrany kraj <strong>{selectedCountry}</strong> nie ma dostępnych miast.
                Możesz przesłać formularz z <code>city: null</code>.
              </p>
            </div>
          )}

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              <h6 className="alert-heading">Pomyślnie przesłano!</h6>
              <p className="mb-0">
                Wybrano: <strong>{selectedCountry}</strong>
                {hasNoCities ? (
                  <span> - <strong>Brak miast (city: null)</strong></span>
                ) : (
                  <span> - <strong>{selectedCity}</strong></span>
                )}
              </p>
              <hr />
              <p className="mb-0">
                Sprawdź konsolę przeglądarki aby zobaczyć logi.
              </p>
            </div>
          )}
        </div>

        <div className="col-md-6">
          {/* Selection Info */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Informacje o wyborze</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Wybrany kraj:</strong>
                <span className="badge badge-primary ml-2">
                  {selectedCountry || 'Brak wyboru'}
                </span>
              </div>
              <div className="mb-3">
                <strong>Wybrane miasto:</strong>
                <span className={`badge ml-2 ${hasNoCities ? 'badge-warning' : selectedCity ? 'badge-success' : 'badge-secondary'}`}>
                  {hasNoCities ? 'Brak miast' : selectedCity || 'Brak wyboru'}
                </span>
              </div>
              <div className="mb-3">
                <strong>Status formularza:</strong>
                <span className={`badge ml-2 ${isFormValid ? 'badge-success' : 'badge-warning'}`}>
                  {isFormValid ? 'Gotowy do wysłania' : 'Wymaga wypełnienia'}
                </span>
              </div>
              {hasNoCities && (
                <div className="alert alert-warning alert-sm mb-0">
                  <small>
                    <strong>Uwaga:</strong> Ten kraj nie ma miast. Formularz zostanie przesłany z <code>city: null</code>.
                  </small>
                </div>
              )}
            </div>
          </div>

          {/* Country Details */}
          {countryInfo && (
            <div className="card mb-4">
              <div className="card-header">
                <h6 className="card-title mb-0">Szczegóły kraju</h6>
              </div>
              <div className="card-body">
                <h6>{countryInfo.country}</h6>
                <p className="text-muted mb-2">
                  Dostępne miasta: {countryInfo.cities.length}
                </p>
                {countryInfo.cities.length > 0 ? (
                  <div className="cities-list">
                    <small className="text-muted">Miasta:</small>
                    <div className="mt-1">
                      {countryInfo.cities.map((city, index) => (
                        <span key={city} className="badge badge-light mr-1 mb-1">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-info alert-sm mb-0">
                    <small>
                      <strong>Brak miast:</strong> Ten kraj nie ma dostępnych miast.
                    </small>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>1. Wybierz kraj:</strong><br />
                  <small className="text-muted">Z listy dostępnych krajów (niektóre mogą nie mieć miast)</small>
                </li>
                <li className="mb-2">
                  <strong>2. Wybierz miasto:</strong><br />
                  <small className="text-muted">Lista miast zostanie zaktualizowana (jeśli kraj ma miasta)</small>
                </li>
                <li className="mb-2">
                  <strong>3. Wyślij formularz:</strong><br />
                  <small className="text-muted">Przycisk zostanie włączony po wyborze kraju</small>
                </li>
                <li className="mb-2">
                  <strong>4. Kraje bez miast:</strong><br />
                  <small className="text-muted">Można przesłać formularz z <code>city: null</code></small>
                </li>
                <li>
                  <strong>5. Sprawdź konsolę:</strong><br />
                  <small className="text-muted">Logi będą wyświetlone w konsoli przeglądarki</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="card mt-4">
        <div className="card-header">
          <h6 className="card-title mb-0">Statystyki</h6>
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="text-primary">{countriesData.length}</h5>
              <small className="text-muted">Dostępnych krajów</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-success">
                {countriesData.reduce((sum, country) => sum + country.cities.length, 0)}
              </h5>
              <small className="text-muted">Łącznie miast</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-info">
                {countriesData.filter(country => country.cities.length === 0).length}
              </h5>
              <small className="text-muted">Krajów bez miast</small>
            </div>
            <div className="col-md-3">
              <h5 className="text-warning">
                {countryInfo ? countryInfo.cities.length : '-'}
              </h5>
              <small className="text-muted">Miast w wybranym kraju</small>
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
            <strong>Konsola przeglądarki:</strong> Po przesłaniu formularza zostanie wyświetlony komunikat w formacie:
            <br />
            <code className="ml-1">{"{ country: \"Nazwa kraju\", city: \"Nazwa miasta\" }"}</code> - dla krajów z miastami
            <br />
            <code className="ml-1">{"{ country: \"Nazwa kraju\", city: null }"}</code> - dla krajów bez miast
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
