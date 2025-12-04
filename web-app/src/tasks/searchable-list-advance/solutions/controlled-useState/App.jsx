import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Static list of 30 names
  const [names] = useState([
    'Anna Kowalski',
    'Piotr Nowak',
    'Maria Wiśniewska',
    'Jan Kowalczyk',
    'Katarzyna Zielińska',
    'Tomasz Szymański',
    'Agnieszka Woźniak',
    'Michał Kaczmarek',
    'Magdalena Mazur',
    'Paweł Krawczyk',
    'Joanna Piotrowska',
    'Łukasz Grabowski',
    'Monika Pawłowska',
    'Marcin Michalski',
    'Ewa Król',
    'Jakub Wieczorek',
    'Aleksandra Jabłońska',
    'Bartosz Majewski',
    'Natalia Dąbrowski',
    'Krzysztof Adamczyk',
    'Sylwia Nowakowska',
    'Rafał Dudek',
    'Karolina Pawlak',
    'Dawid Włodarczyk',
    'Justyna Kwiecień',
    'Marek Sobczak',
    'Patrycja Baran',
    'Łukasz Rutkowski',
    'Weronika Michalak',
    'Przemysław Sikora'
  ])

  // State for search input and filtered results
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredNames, setFilteredNames] = useState(names)
  
  // State for search history
  const [searchHistory, setSearchHistory] = useState([])

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory')
    if (savedHistory) {
      try {
        const history = JSON.parse(savedHistory)
        setSearchHistory(history)
      } catch (error) {
        console.error('Error loading search history from localStorage:', error)
      }
    }
  }, [])

  // Save search history to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

  // Filter names based on search term
  const filterNames = (term) => {
    if (!term.trim()) {
      return names
    }
    
    return names.filter(name => 
      name.toLowerCase().includes(term.toLowerCase())
    )
  }

  // Highlight matching text in names
  const highlightMatch = (name, searchTerm) => {
    if (!searchTerm.trim()) {
      return name
    }
    
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    const parts = name.split(regex)
    
    return parts.map((part, index) => {
      if (regex.test(part)) {
        return <mark key={index}>{part}</mark>
      }
      return part
    })
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    
    const filtered = filterNames(value)
    setFilteredNames(filtered)
    
    // Add to search history if search term is not empty
    if (value.trim()) {
      const historyRecord = {
        id: Date.now(),
        searchTerm: value.trim(),
        resultCount: filtered.length,
        timestamp: new Date().toLocaleString()
      }
      setSearchHistory(prev => [...prev, historyRecord])
    }
    
    // Log filtered length after each change
    console.log(filtered.length)
  }

  // Clear search
  const handleClearSearch = () => {
    setSearchTerm('')
    setFilteredNames(names)
    console.log(names.length)
  }

  // Clear search history
  const clearSearchHistory = () => {
    setSearchHistory([])
    console.log("Historia wyszukiwań wyczyszczona")
  }

  // Update filtered names when names array changes (initial load)
  useEffect(() => {
    setFilteredNames(names)
    console.log(names.length)
  }, [names])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Wyszukiwarka nazwisk</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-10">
          {/* Search Section */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Wyszukiwanie</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="searchInput">Szukaj:</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="searchInput"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Wprowadź tekst do wyszukania..."
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
              
              {/* Results Counter */}
              <div className="mt-3">
                <div className="alert alert-info mb-0">
                  <strong>Liczba wyników: {filteredNames.length}</strong>
                  {searchTerm && (
                    <span className="ms-2">
                      (wyszukiwanie: "{searchTerm}")
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Names List */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">
                Lista nazwisk
                {searchTerm && (
                  <small className="text-muted ms-2">
                    - przefiltrowane wyniki
                  </small>
                )}
              </h5>
            </div>
            <div className="card-body">
              {filteredNames.length > 0 ? (
                <div className="row">
                  <div className="col-md-6">
                    <ol className="list-group list-group-flush">
                      {filteredNames.slice(0, Math.ceil(filteredNames.length / 2)).map((name, index) => (
                        <li key={name} className="list-group-item d-flex justify-content-between align-items-center">
                          <span>{highlightMatch(name, searchTerm)}</span>
                          <span className="badge bg-primary rounded-pill">
                            {index + 1}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {filteredNames.length > 1 && (
                    <div className="col-md-6">
                      <ol className="list-group list-group-flush" start={Math.ceil(filteredNames.length / 2) + 1}>
                        {filteredNames.slice(Math.ceil(filteredNames.length / 2)).map((name, index) => (
                          <li key={name} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{highlightMatch(name, searchTerm)}</span>
                            <span className="badge bg-primary rounded-pill">
                              {Math.ceil(filteredNames.length / 2) + index + 1}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="alert alert-warning">
                    <h5>Brak wyników</h5>
                    <p className="mb-0">
                      Nie znaleziono nazwisk pasujących do frazy "{searchTerm}".
                      <br />
                      Spróbuj użyć innego tekstu wyszukiwania.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Historia wyszukiwań</h5>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearSearchHistory}
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
                        <th scope="col">Fraza wyszukiwania</th>
                        <th scope="col">Liczba wyników</th>
                        <th scope="col">Data wyszukiwania</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchHistory.map((search, index) => (
                        <tr key={search.id}>
                          <th scope="row">{index + 1}</th>
                          <td>"{search.searchTerm}"</td>
                          <td>{search.resultCount} wyników</td>
                          <td>{search.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
              <ul className="list-unstyled mb-0">
                <li>• Wprowadź tekst w pole wyszukiwania aby przefiltrować listę</li>
                <li>• Wyszukiwanie jest bez uwzględniania wielkości liter</li>
                <li>• Dopasowane fragmenty są podświetlone wizualnie</li>
                <li>• Liczba wyników aktualizuje się automatycznie</li>
                <li>• Puste pole wyszukiwania pokazuje wszystkie nazwiska</li>
                <li>• Użyj przycisku "Wyczyść" aby zresetować wyszukiwanie</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć logi liczby wyników</li>
                <li>• Historia wyszukiwań jest automatycznie zapisywana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
