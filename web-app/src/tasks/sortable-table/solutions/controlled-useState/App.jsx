import 'bootstrap/dist/css/bootstrap.css'
import { useState, useMemo } from 'react'

function App() {
  // Static data - array of objects with name and score
  const initialData = [
    { name: 'Anna Kowalska', score: 95 },
    { name: 'Piotr Nowak', score: 87 },
    { name: 'Maria Wiśniewska', score: 92 },
    { name: 'Jan Kowalski', score: 78 },
    { name: 'Katarzyna Zielińska', score: 89 },
    { name: 'Tomasz Lewandowski', score: 91 },
    { name: 'Agnieszka Dąbrowska', score: 83 },
    { name: 'Michał Kamiński', score: 96 },
    { name: 'Joanna Wójcik', score: 88 },
    { name: 'Paweł Kaczmarek', score: 85 },
    { name: 'Magdalena Mazur', score: 90 },
    { name: 'Łukasz Krawczyk', score: 82 },
    { name: 'Ewa Jankowska', score: 94 },
    { name: 'Marcin Woźniak', score: 79 },
    { name: 'Monika Kozłowska', score: 93 }
  ]

  // State for sorting
  const [sortField, setSortField] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')

  // Sort data based on current sort settings
  const sortedData = useMemo(() => {
    return [...initialData].sort((a, b) => {
      let comparison = 0
      
      // Primary sort by selected field
      if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name)
      } else if (sortField === 'score') {
        comparison = a.score - b.score
      }
      
      // Apply sort direction
      if (sortDirection === 'desc') {
        comparison = -comparison
      }
      
      // Secondary sort by name for ties (stable sorting)
      if (comparison === 0 && sortField !== 'name') {
        comparison = a.name.localeCompare(b.name)
      }
      
      return comparison
    })
  }, [sortField, sortDirection])

  // Handle column header click
  const handleSort = (field) => {
    if (field === sortField) {
      // Same field - toggle direction
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
      setSortDirection(newDirection)
      console.log(`Sort: field=${field} dir=${newDirection}`)
    } else {
      // Different field - set new field with asc direction
      setSortField(field)
      setSortDirection('asc')
      console.log(`Sort: field=${field} dir=asc`)
    }
  }

  // Get sort indicator for column header
  const getSortIndicator = (field) => {
    if (field === sortField) {
      return sortDirection === 'asc' ? '▲' : '▼'
    }
    return '↕'
  }

  // Get header class for styling
  const getHeaderClass = (field) => {
    if (field === sortField) {
      return 'table-active'
    }
    return ''
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sortowalna tabela wyników</h2>
      
      <div className="row">
        <div className="col-md-8">
          {/* Sortable Table */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                Tabela wyników
                <span className="badge bg-primary ms-2">
                  {sortedData.length} rekordów
                </span>
              </h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="thead-light">
                    <tr>
                      <th 
                        scope="col" 
                        className={`sortable-header ${getHeaderClass('name')}`}
                        onClick={() => handleSort('name')}
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        Nazwa
                        <span className="ms-2 sort-indicator">
                          {getSortIndicator('name')}
                        </span>
                      </th>
                      <th 
                        scope="col" 
                        className={`sortable-header ${getHeaderClass('score')}`}
                        onClick={() => handleSort('score')}
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        Wynik
                        <span className="ms-2 sort-indicator">
                          {getSortIndicator('score')}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((item) => (
                      <tr key={`${item.name}-${item.score}`}>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>
                          <span className={`badge ${
                            item.score >= 90 ? 'bg-success' :
                            item.score >= 80 ? 'bg-warning' :
                            'bg-danger'
                          }`}>
                            {item.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* Sort Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Informacje o sortowaniu</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Kolumna:</strong>
                <span className="badge bg-info ms-2">
                  {sortField === 'name' ? 'Nazwa' : 'Wynik'}
                </span>
              </div>
              <div className="mb-3">
                <strong>Kierunek:</strong>
                <span className="badge bg-secondary ms-2">
                  {sortDirection === 'asc' ? 'Rosnąco ▲' : 'Malejąco ▼'}
                </span>
              </div>
              <div>
                <strong>Status:</strong>
                <span className="badge bg-success ms-2">
                  Posortowano
                </span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki wyników</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <h5 className="text-primary">{sortedData.length}</h5>
                  <small className="text-muted">Łącznie</small>
                </div>
                <div className="col-6">
                  <h5 className="text-success">
                    {Math.round(sortedData.reduce((sum, item) => sum + item.score, 0) / sortedData.length)}
                  </h5>
                  <small className="text-muted">Średnia</small>
                </div>
              </div>
              <hr />
              <div className="row text-center">
                <div className="col-4">
                  <h6 className="text-success">
                    {sortedData.filter(item => item.score >= 90).length}
                  </h6>
                  <small className="text-muted">≥90</small>
                </div>
                <div className="col-4">
                  <h6 className="text-warning">
                    {sortedData.filter(item => item.score >= 80 && item.score < 90).length}
                  </h6>
                  <small className="text-muted">80-89</small>
                </div>
                <div className="col-4">
                  <h6 className="text-danger">
                    {sortedData.filter(item => item.score < 80).length}
                  </h6>
                  <small className="text-muted">&lt;80</small>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Instructions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje sortowania</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>Kliknij nagłówek:</strong><br />
                  <small className="text-muted">Aby posortować według tej kolumny</small>
                </li>
                <li className="mb-2">
                  <strong>Kliknij ponownie:</strong><br />
                  <small className="text-muted">Aby zmienić kierunek sortowania</small>
                </li>
                <li className="mb-2">
                  <strong>Wskaźniki:</strong><br />
                  <small className="text-muted">▲ rosnąco, ▼ malejąco, ↕ nieaktywne</small>
                </li>
                <li>
                  <strong>Sortowanie stabilne:</strong><br />
                  <small className="text-muted">Elementy o tym samym wyniku są sortowane według nazwy</small>
                </li>
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
            <strong>Konsola przeglądarki:</strong> Wszystkie zmiany sortowania są logowane w formacie:
            <br />
            <code className="ms-1">"Sort: field={sortField} dir={sortDirection}"</code>
            <br />
            gdzie kolumna to "name" lub "score", kierunek to "asc" lub "desc".
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
