import 'bootstrap/dist/css/bootstrap.css'
import { useState, useRef } from 'react'

function App() {
  // State for form mode toggle
  const [isControlledMode, setIsControlledMode] = useState(true)
  
  // State for controlled form values
  const [controlledValues, setControlledValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  // Refs for uncontrolled form inputs
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  
  // State for success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [lastSubmittedData, setLastSubmittedData] = useState(null)

  // Handle mode toggle
  const handleModeToggle = (event) => {
    const isControlled = event.target.value === 'controlled'
    setIsControlledMode(isControlled)
    setShowSuccessMessage(false)
    
    // Reset form values when switching modes
    if (isControlled) {
      setControlledValues({ name: '', email: '', message: '' })
    } else {
      // Clear uncontrolled inputs via refs
      if (nameRef.current) nameRef.current.value = ''
      if (emailRef.current) emailRef.current.value = ''
      if (messageRef.current) messageRef.current.value = ''
    }
  }

  // Handle controlled input changes
  const handleControlledChange = (field) => (event) => {
    setControlledValues(prev => ({
      ...prev,
      [field]: event.target.value
    }))
    setShowSuccessMessage(false)
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    
    let formData
    
    if (isControlledMode) {
      // Get values from controlled state
      formData = {
        name: controlledValues.name,
        email: controlledValues.email,
        message: controlledValues.message,
        mode: 'controlled'
      }
      
      // Clear controlled form
      setControlledValues({ name: '', email: '', message: '' })
    } else {
      // Get values from uncontrolled refs
      formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
        mode: 'uncontrolled'
      }
      
      // Clear uncontrolled form via refs
      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
    }
    
    // Log the form data
    console.log(formData)
    
    // Show success message
    setLastSubmittedData(formData)
    setShowSuccessMessage(true)
  }

  // Get current form values for display
  const getCurrentFormValues = () => {
    if (isControlledMode) {
      return controlledValues
    } else {
      return {
        name: nameRef.current?.value || '',
        email: emailRef.current?.value || '',
        message: messageRef.current?.value || ''
      }
    }
  }

  const currentValues = getCurrentFormValues()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Demonstracja kontrolowanych i niekontrolowanych komponentów</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Mode Toggle */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Tryb formularza</h5>
            </div>
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formMode"
                  id="controlledMode"
                  value="controlled"
                  checked={isControlledMode}
                  onChange={handleModeToggle}
                />
                <label className="form-check-label" htmlFor="controlledMode">
                  <strong>Kontrolowany</strong>
                  <br />
                  <small className="text-muted">Wartości kontrolowane przez React state</small>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formMode"
                  id="uncontrolledMode"
                  value="uncontrolled"
                  checked={!isControlledMode}
                  onChange={handleModeToggle}
                />
                <label className="form-check-label" htmlFor="uncontrolledMode">
                  <strong>Niekontrolowany</strong>
                  <br />
                  <small className="text-muted">Wartości kontrolowane przez DOM</small>
                </label>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">
                Formularz kontaktowy
                <span className={`badge ms-2 ${isControlledMode ? 'bg-primary' : 'bg-secondary'}`}>
                  {isControlledMode ? 'Kontrolowany' : 'Niekontrolowany'}
                </span>
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nameInput">Imię:</label>
                  {isControlledMode ? (
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      value={controlledValues.name}
                      onChange={handleControlledChange('name')}
                      placeholder="Wprowadź imię..."
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      ref={nameRef}
                      placeholder="Wprowadź imię..."
                    />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="emailInput">Email:</label>
                  {isControlledMode ? (
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      value={controlledValues.email}
                      onChange={handleControlledChange('email')}
                      placeholder="Wprowadź email..."
                    />
                  ) : (
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      ref={emailRef}
                      placeholder="Wprowadź email..."
                    />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="messageInput">Wiadomość:</label>
                  {isControlledMode ? (
                    <textarea
                      className="form-control"
                      id="messageInput"
                      rows="3"
                      value={controlledValues.message}
                      onChange={handleControlledChange('message')}
                      placeholder="Wprowadź wiadomość..."
                    />
                  ) : (
                    <textarea
                      className="form-control"
                      id="messageInput"
                      rows="3"
                      ref={messageRef}
                      placeholder="Wprowadź wiadomość..."
                    />
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Wyślij
                </button>
              </form>
            </div>
          </div>

          {/* Success Message */}
          {showSuccessMessage && lastSubmittedData && (
            <div className="alert alert-success" role="alert">
              <h6 className="alert-heading">Pomyślnie przesłano!</h6>
              <p className="mb-0">
                <strong>Tryb:</strong> {lastSubmittedData.mode === 'controlled' ? 'Kontrolowany' : 'Niekontrolowany'}
              </p>
              <p className="mb-0">
                <strong>Dane:</strong> {lastSubmittedData.name}, {lastSubmittedData.email}
              </p>
              <hr />
              <p className="mb-0">
                Sprawdź konsolę przeglądarki aby zobaczyć pełne logi.
              </p>
            </div>
          )}
        </div>

        <div className="col-md-6">
          {/* Current Mode Info */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Informacje o trybie</h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Aktualny tryb:</strong>
                <span className={`badge ms-2 ${isControlledMode ? 'bg-primary' : 'bg-secondary'}`}>
                  {isControlledMode ? 'Kontrolowany' : 'Niekontrolowany'}
                </span>
              </div>
              <div className="mb-3">
                <strong>Źródło danych:</strong>
                <span className="badge bg-info ms-2">
                  {isControlledMode ? 'React State' : 'DOM Refs'}
                </span>
              </div>
              <div className="mb-3">
                <strong>Czyszczenie formularza:</strong>
                <span className="badge bg-warning ms-2">
                  {isControlledMode ? 'setState()' : 'ref.current.value = ""'}
                </span>
              </div>
            </div>
          </div>

          {/* Current Form Values */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Aktualne wartości formularza</h6>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <strong>Imię:</strong>
                <span className="badge bg-light text-dark ms-2">
                  {currentValues.name || 'Puste'}
                </span>
              </div>
              <div className="mb-2">
                <strong>Email:</strong>
                <span className="badge bg-light text-dark ms-2">
                  {currentValues.email || 'Puste'}
                </span>
              </div>
              <div className="mb-2">
                <strong>Wiadomość:</strong>
                <span className="badge bg-light text-dark ms-2">
                  {currentValues.message || 'Pusta'}
                </span>
              </div>
            </div>
          </div>

          {/* Mode Comparison */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Porównanie trybów</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h6 className="text-primary">Kontrolowany</h6>
                  <ul className="list-unstyled small">
                    <li>✓ Wartości w state</li>
                    <li>✓ onChange handlers</li>
                    <li>✓ Pełna kontrola</li>
                    <li>✓ Walidacja w czasie rzeczywistym</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="text-secondary">Niekontrolowany</h6>
                  <ul className="list-unstyled small">
                    <li>✓ Wartości w DOM</li>
                    <li>✓ useRef() do dostępu</li>
                    <li>✓ Mniej re-renderów</li>
                    <li>✓ Prostszy kod</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>1. Wybierz tryb:</strong><br />
                  <small className="text-muted">Kontrolowany lub niekontrolowany</small>
                </li>
                <li className="mb-2">
                  <strong>2. Wypełnij formularz:</strong><br />
                  <small className="text-muted">Obserwuj różnice w zachowaniu</small>
                </li>
                <li className="mb-2">
                  <strong>3. Wyślij formularz:</strong><br />
                  <small className="text-muted">Sprawdź logi w konsoli</small>
                </li>
                <li>
                  <strong>4. Porównaj tryby:</strong><br />
                  <small className="text-muted">Zauważ różnice w czyszczeniu formularza</small>
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
            <strong>Konsola przeglądarki:</strong> Po przesłaniu formularza zostanie wyświetlony komunikat w formacie:
            <br />
            <code className="ms-1">{"{ name: \"Imię\", email: \"email@example.com\", message: \"Treść\", mode: \"controlled\" }"}</code>
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
