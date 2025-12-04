import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Tab configuration
  const tabs = [
    { id: 'info', label: 'Info', content: 'info' },
    { id: 'lista', label: 'Lista', content: 'lista' },
    { id: 'ustawienia', label: 'Ustawienia', content: 'ustawienia' }
  ]

  // State for active tab and navigation history
  const [activeTab, setActiveTab] = useState(() => {
    // Load last active tab from localStorage on initialization
    try {
      const savedTab = localStorage.getItem('lastActiveTab')
      return savedTab || 'info'
    } catch (error) {
      console.error('Error loading last active tab from localStorage:', error)
      return 'info'
    }
  })

  const [navigationHistory, setNavigationHistory] = useState([])

  // Load navigation history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('navigationHistory')
    if (savedHistory) {
      try {
        const history = JSON.parse(savedHistory)
        setNavigationHistory(history)
      } catch (error) {
        console.error('Error loading navigation history from localStorage:', error)
      }
    }
  }, [])

  // Save navigation history to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem('navigationHistory', JSON.stringify(navigationHistory))
  }, [navigationHistory])

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lastActiveTab', activeTab)
  }, [activeTab])

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    
    // Add to navigation history
    const historyRecord = {
      id: Date.now(),
      fromTab: activeTab,
      toTab: tabId,
      timestamp: new Date().toLocaleString()
    }
    setNavigationHistory(prev => [...prev, historyRecord])
    
    // Log tab change as required
    const tabLabel = tabs.find(tab => tab.id === tabId)?.label
    console.log(`Tab: ${tabLabel}`)
  }

  // Clear navigation history
  const clearNavigationHistory = () => {
    setNavigationHistory([])
    console.log("Historia nawigacji wyczyszczona")
  }

  // Render Info tab content
  const renderInfoContent = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Informacje o aplikacji</h5>
      </div>
      <div className="card-body">
        <h6>Opis aplikacji:</h6>
        <p>To jest przykładowa aplikacja demonstrująca działanie zakładek (tabs) w React.js z wykorzystaniem Bootstrap nav-pills i zaawansowanymi funkcjami.</p>
        
        <h6 className="mt-4">Funkcjonalności:</h6>
        <ul>
          <li>Nawigacja za pomocą zakładek</li>
          <li>Przełączanie treści w zależności od aktywnej zakładki</li>
          <li>Logowanie zmian zakładek do konsoli</li>
          <li>Responsywny design z Bootstrap</li>
          <li>Historia nawigacji z zapisem w localStorage</li>
          <li>Przywracanie ostatniej aktywnej zakładki</li>
        </ul>

        <h6 className="mt-4">Technologie:</h6>
        <ul>
          <li>React.js</li>
          <li>Bootstrap 4</li>
          <li>JavaScript ES6+</li>
          <li>localStorage</li>
        </ul>
      </div>
    </div>
  )

  // Render Lista tab content
  const renderListaContent = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Lista elementów</h5>
      </div>
      <div className="card-body">
        <h6>Przykładowa lista:</h6>
        <ol className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Element pierwszy
            <span className="badge bg-primary rounded-pill">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Element drugi
            <span className="badge bg-primary rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Element trzeci
            <span className="badge bg-primary rounded-pill">3</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Element czwarty
            <span className="badge bg-primary rounded-pill">4</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Element piąty
            <span className="badge bg-primary rounded-pill">5</span>
          </li>
        </ol>
        
        <div className="mt-3">
          <small className="text-muted">
            Lista zawiera {5} elementów z numeracją.
          </small>
        </div>
      </div>
    </div>
  )

  // Render Ustawienia tab content
  const renderUstawieniaContent = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Ustawienia aplikacji</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="themeSelect">Motyw:</label>
            <select className="form-control" id="themeSelect">
              <option>Jasny</option>
              <option>Ciemny</option>
              <option>Automatyczny</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="languageSelect">Język:</label>
            <select className="form-control" id="languageSelect">
              <option>Polski</option>
              <option>English</option>
              <option>Deutsch</option>
            </select>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="notificationsCheck" />
              <label className="form-check-label" htmlFor="notificationsCheck">
                Powiadomienia
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="analyticsCheck" />
              <label className="form-check-label" htmlFor="analyticsCheck">
                Analityka
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Zapisz ustawienia
          </button>
        </form>
      </div>
    </div>
  )

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return renderInfoContent()
      case 'lista':
        return renderListaContent()
      case 'ustawienia':
        return renderUstawieniaContent()
      default:
        return renderInfoContent()
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Aplikacja z zakładkami</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-10">
          {/* Navigation Pills */}
          <ul className="nav nav-pills mb-4">
            {tabs.map(tab => (
              <li key={tab.id} className="nav-item">
                <button
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                  type="button"
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Navigation History */}
          {navigationHistory.length > 0 && (
            <div className="card mt-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Historia nawigacji</h5>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearNavigationHistory}
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
                        <th scope="col">Z</th>
                        <th scope="col">Do</th>
                        <th scope="col">Data i Czas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {navigationHistory.map((nav, index) => (
                        <tr key={nav.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{tabs.find(tab => tab.id === nav.fromTab)?.label}</td>
                          <td>{tabs.find(tab => tab.id === nav.toTab)?.label}</td>
                          <td>{nav.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li>• Kliknij na zakładkę aby przełączyć treść</li>
                <li>• Aktywna zakładka jest podświetlona</li>
                <li>• Każda zmiana zakładki jest logowana do konsoli</li>
                <li>• Ostatnia aktywna zakładka jest zapisywana w localStorage</li>
                <li>• Historia nawigacji jest automatycznie zapisywana</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć komunikaty</li>
                <li>• Zakładka "Info" - informacje o aplikacji</li>
                <li>• Zakładka "Lista" - przykładowa lista elementów</li>
                <li>• Zakładka "Ustawienia" - formularz ustawień</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
