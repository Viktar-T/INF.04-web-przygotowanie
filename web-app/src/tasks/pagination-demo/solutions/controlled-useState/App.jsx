import 'bootstrap/dist/css/bootstrap.css'
import { useState, useMemo } from 'react'

function App() {
  // Static data - 42 items
  const allItems = Array.from({ length: 42 }, (_, index) => ({
    id: index + 1,
    name: `Element ${index + 1}`,
    description: `Opis elementu numer ${index + 1}`,
    category: ['A', 'B', 'C'][index % 3]
  }))

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  // Calculate pagination values
  const totalItems = allItems.length
  const totalPages = Math.ceil(totalItems / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

  // Get current page items
  const currentPageItems = useMemo(() => {
    return allItems.slice(startIndex, startIndex + pageSize)
  }, [startIndex, pageSize])

  // Handle page size change
  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value)
    setPageSize(newPageSize)
    
    // Recalculate current page to stay within bounds
    const newTotalPages = Math.ceil(totalItems / newPageSize)
    const newCurrentPage = Math.min(currentPage, newTotalPages)
    
    if (newCurrentPage !== currentPage) {
      setCurrentPage(newCurrentPage)
    }
    
    console.log(`Rozmiar: ${newPageSize}`)
  }

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      console.log(`Strona: ${newPage}`)
    }
  }

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      console.log(`Strona: ${newPage}`)
    }
  }

  // Check if buttons should be disabled
  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Demonstracja paginacji</h2>
      
      <div className="row">
        <div className="col-md-8">
          {/* Pagination Controls */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Kontrolki paginacji</h5>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <label htmlFor="pageSizeSelect" className="form-label">
                    Rozmiar strony:
                  </label>
                  <select
                    id="pageSizeSelect"
                    className="form-select"
                    value={pageSize}
                    onChange={handlePageSizeChange}
                  >
                    <option value={5}>5 elementów</option>
                    <option value={10}>10 elementów</option>
                  </select>
                </div>
                
                <div className="col-md-4">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handlePreviousPage}
                      disabled={isPreviousDisabled}
                    >
                      Poprzednia
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleNextPage}
                      disabled={isNextDisabled}
                    >
                      Następna
                    </button>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-end">
                    <span className="badge badge-primary badge-lg">
                      Strona {currentPage} z {totalPages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Informacje o pozycjach</h6>
            </div>
            <div className="card-body">
              <p className="mb-0">
                <strong>Pozycje {startIndex + 1}–{endIndex + 1} z {totalItems}</strong>
              </p>
              <small className="text-muted">
                Wyświetlane elementy: {currentPageItems.length} z {totalItems} łącznie
              </small>
            </div>
          </div>

          {/* Items List */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">
                Lista elementów - Strona {currentPage}
              </h6>
            </div>
            <div className="card-body">
              {currentPageItems.length > 0 ? (
                <div className="list-group list-group-flush">
                  {currentPageItems.map((item) => (
                    <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-1 text-muted">{item.description}</p>
                      </div>
                      <div>
                        <span className="badge badge-secondary mr-2">
                          ID: {item.id}
                        </span>
                        <span className="badge badge-info">
                          Kategoria: {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-muted py-4">
                  <p className="mb-0">Brak elementów do wyświetlenia</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* Statistics */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <h5 className="text-primary">{totalItems}</h5>
                  <small className="text-muted">Łącznie elementów</small>
                </div>
                <div className="col-6">
                  <h5 className="text-success">{totalPages}</h5>
                  <small className="text-muted">Łącznie stron</small>
                </div>
              </div>
              <hr />
              <div className="row text-center">
                <div className="col-6">
                  <h5 className="text-info">{currentPageItems.length}</h5>
                  <small className="text-muted">Na tej stronie</small>
                </div>
                <div className="col-6">
                  <h5 className="text-warning">{pageSize}</h5>
                  <small className="text-muted">Rozmiar strony</small>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Help */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Nawigacja</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>Rozmiar strony:</strong><br />
                  <small className="text-muted">Wybierz ile elementów ma być wyświetlonych na stronie</small>
                </li>
                <li className="mb-2">
                  <strong>Poprzednia/Następna:</strong><br />
                  <small className="text-muted">Przechodzenie między stronami</small>
                </li>
                <li>
                  <strong>Automatyczne wyłączenie:</strong><br />
                  <small className="text-muted">Przyciski są wyłączane na granicach</small>
                </li>
              </ul>
            </div>
          </div>

          {/* Page Numbers Preview */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Podgląd stron</h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <div className="btn-group-vertical w-100" role="group">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                    const pageNum = index + 1
                    const isActive = pageNum === currentPage
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        className={`btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline-secondary'}`}
                        disabled
                      >
                        Strona {pageNum}
                        {isActive && <span className="ml-1">(aktywna)</span>}
                      </button>
                    )
                  })}
                  {totalPages > 5 && (
                    <button type="button" className="btn btn-sm btn-outline-secondary" disabled>
                      ... i {totalPages - 5} więcej
                    </button>
                  )}
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
            <strong>Konsola przeglądarki:</strong> Wszystkie zmiany są logowane w formacie:
            <br />
            <code className="ml-1">"Strona: {n}"</code> - przy zmianie strony
            <br />
            <code className="ml-1">"Rozmiar: {k}"</code> - przy zmianie rozmiaru strony
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
