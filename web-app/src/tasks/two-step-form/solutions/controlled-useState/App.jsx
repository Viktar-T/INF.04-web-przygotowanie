import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // State for current step
  const [currentStep, setCurrentStep] = useState(1)
  const [isCompleted, setIsCompleted] = useState(false)
  
  // State for personal data (Step 1)
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  
  // State for preferences (Step 2)
  const [preferences, setPreferences] = useState({
    favoriteColor: '',
    experienceLevel: ''
  })
  
  // State for validation errors
  const [errors, setErrors] = useState({})

  // Validate personal data (Step 1)
  const validatePersonalData = () => {
    const newErrors = {}
    
    if (!personalData.firstName.trim() || personalData.firstName.trim().length < 2) {
      newErrors.firstName = 'Imię musi mieć co najmniej 2 znaki'
    }
    
    if (!personalData.lastName.trim() || personalData.lastName.trim().length < 2) {
      newErrors.lastName = 'Nazwisko musi mieć co najmniej 2 znaki'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!personalData.email.trim() || !emailRegex.test(personalData.email)) {
      newErrors.email = 'Podaj poprawny adres email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate preferences (Step 2)
  const validatePreferences = () => {
    const newErrors = {}
    
    if (!preferences.favoriteColor) {
      newErrors.favoriteColor = 'Wybierz ulubiony kolor'
    }
    
    if (!preferences.experienceLevel) {
      newErrors.experienceLevel = 'Wybierz poziom doświadczenia'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle personal data input changes
  const handlePersonalDataChange = (field, value) => {
    setPersonalData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  // Handle preferences input changes
  const handlePreferencesChange = (field, value) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  // Navigate to next step
  const goToNextStep = () => {
    if (currentStep === 1 && validatePersonalData()) {
      setCurrentStep(2)
    }
  }

  // Navigate to previous step
  const goToPreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    }
  }

  // Complete the form
  const completeForm = () => {
    if (validatePreferences()) {
      setIsCompleted(true)
      
      // Log combined data to console
      const combinedData = {
        personalData: personalData,
        preferences: preferences
      }
      console.log(combinedData)
    }
  }

  // Reset form to start over
  const resetForm = () => {
    setCurrentStep(1)
    setIsCompleted(false)
    setPersonalData({
      firstName: '',
      lastName: '',
      email: ''
    })
    setPreferences({
      favoriteColor: '',
      experienceLevel: ''
    })
    setErrors({})
  }

  // Check if step 1 is valid
  const isStep1Valid = () => {
    return personalData.firstName.trim().length >= 2 &&
           personalData.lastName.trim().length >= 2 &&
           personalData.email.trim() &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalData.email)
  }

  // Check if step 2 is valid
  const isStep2Valid = () => {
    return preferences.favoriteColor && preferences.experienceLevel
  }

  // Render Step 1 - Personal Data
  const renderStep1 = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Krok 1: Dane osobowe</h5>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="firstName">Imię *</label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            id="firstName"
            value={personalData.firstName}
            onChange={(e) => handlePersonalDataChange('firstName', e.target.value)}
            placeholder="Wprowadź imię"
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nazwisko *</label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            id="lastName"
            value={personalData.lastName}
            onChange={(e) => handlePersonalDataChange('lastName', e.target.value)}
            placeholder="Wprowadź nazwisko"
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            value={personalData.email}
            onChange={(e) => handlePersonalDataChange('email', e.target.value)}
            placeholder="Wprowadź adres email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={goToNextStep}
            disabled={!isStep1Valid()}
          >
            Dalej
          </button>
        </div>
      </div>
    </div>
  )

  // Render Step 2 - Preferences
  const renderStep2 = () => (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Krok 2: Preferencje</h5>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="favoriteColor">Ulubiony kolor *</label>
          <select
            className={`form-control ${errors.favoriteColor ? 'is-invalid' : ''}`}
            id="favoriteColor"
            value={preferences.favoriteColor}
            onChange={(e) => handlePreferencesChange('favoriteColor', e.target.value)}
          >
            <option value="">Wybierz kolor</option>
            <option value="Czerwony">Czerwony</option>
            <option value="Niebieski">Niebieski</option>
            <option value="Zielony">Zielony</option>
            <option value="Żółty">Żółty</option>
          </select>
          {errors.favoriteColor && (
            <div className="invalid-feedback">{errors.favoriteColor}</div>
          )}
        </div>

        <div className="form-group">
          <label>Poziom doświadczenia *</label>
          <div className="mt-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="experienceLevel"
                id="beginner"
                value="Początkujący"
                checked={preferences.experienceLevel === 'Początkujący'}
                onChange={(e) => handlePreferencesChange('experienceLevel', e.target.value)}
              />
              <label className="form-check-label" htmlFor="beginner">
                Początkujący
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="experienceLevel"
                id="intermediate"
                value="Średniozaawansowany"
                checked={preferences.experienceLevel === 'Średniozaawansowany'}
                onChange={(e) => handlePreferencesChange('experienceLevel', e.target.value)}
              />
              <label className="form-check-label" htmlFor="intermediate">
                Średniozaawansowany
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="experienceLevel"
                id="advanced"
                value="Zaawansowany"
                checked={preferences.experienceLevel === 'Zaawansowany'}
                onChange={(e) => handlePreferencesChange('experienceLevel', e.target.value)}
              />
              <label className="form-check-label" htmlFor="advanced">
                Zaawansowany
              </label>
            </div>
          </div>
          {errors.experienceLevel && (
            <div className="text-danger small mt-1">{errors.experienceLevel}</div>
          )}
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={goToPreviousStep}
          >
            Wstecz
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={completeForm}
            disabled={!isStep2Valid()}
          >
            Zakończ
          </button>
        </div>
      </div>
    </div>
  )

  // Render completion summary
  const renderSummary = () => (
    <div className="card">
      <div className="card-header bg-success text-white">
        <h5 className="card-title mb-0">✅ Formularz ukończony!</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <h6>Dane osobowe:</h6>
            <ul className="list-unstyled">
              <li><strong>Imię:</strong> {personalData.firstName}</li>
              <li><strong>Nazwisko:</strong> {personalData.lastName}</li>
              <li><strong>Email:</strong> {personalData.email}</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h6>Preferencje:</h6>
            <ul className="list-unstyled">
              <li><strong>Ulubiony kolor:</strong> {preferences.favoriteColor}</li>
              <li><strong>Poziom doświadczenia:</strong> {preferences.experienceLevel}</li>
            </ul>
          </div>
        </div>
        
        <div className="alert alert-info mt-3" role="alert">
          <h6 className="alert-heading">Dane zostały zapisane!</h6>
          <p className="mb-0">
            Sprawdź konsolę przeglądarki aby zobaczyć połączone dane z obu kroków.
          </p>
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={resetForm}
          >
            Rozpocznij ponownie
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dwuetapowy formularz</h2>
      
      {/* Progress Indicator */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Postęp wypełniania formularza</h6>
            <span className="badge badge-primary">
              Krok {currentStep}/2
            </span>
          </div>
          
          <div className="progress mb-3">
            <div 
              className="progress-bar" 
              role="progressbar" 
              style={{ width: `${(currentStep / 2) * 100}%` }}
              aria-valuenow={currentStep} 
              aria-valuemin="0" 
              aria-valuemax="2"
            >
              {Math.round((currentStep / 2) * 100)}%
            </div>
          </div>
          
          <div className="row text-center">
            <div className="col-6">
              <div className={`p-2 rounded ${currentStep >= 1 ? 'bg-primary text-white' : 'bg-light'}`}>
                <strong>1. Dane osobowe</strong>
                {currentStep >= 1 && <span className="ml-1">✓</span>}
              </div>
            </div>
            <div className="col-6">
              <div className={`p-2 rounded ${currentStep >= 2 ? 'bg-success text-white' : 'bg-light'}`}>
                <strong>2. Preferencje</strong>
                {currentStep >= 2 && <span className="ml-1">✓</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="row">
        <div className="col-md-8">
          {!isCompleted ? (
            currentStep === 1 ? renderStep1() : renderStep2()
          ) : (
            renderSummary()
          )}
        </div>
        
        <div className="col-md-4">
          {/* Form Instructions */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <h6>Krok 1 - Dane osobowe:</h6>
              <ul className="small">
                <li>Imię (min. 2 znaki)</li>
                <li>Nazwisko (min. 2 znaki)</li>
                <li>Email (poprawny format)</li>
              </ul>
              
              <h6>Krok 2 - Preferencje:</h6>
              <ul className="small">
                <li>Ulubiony kolor</li>
                <li>Poziom doświadczenia</li>
              </ul>
              
              <hr />
              <p className="small mb-0">
                <strong>Nawigacja:</strong><br />
                • Dalej - przejdź do kroku 2<br />
                • Wstecz - wróć do kroku 1<br />
                • Zakończ - ukończ formularz
              </p>
            </div>
          </div>

          {/* Validation Status */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Status walidacji</h6>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <span className={`badge ${isStep1Valid() ? 'badge-success' : 'badge-secondary'}`}>
                  Krok 1: {isStep1Valid() ? 'Poprawny' : 'Niepoprawny'}
                </span>
              </div>
              <div className="mb-2">
                <span className={`badge ${isStep2Valid() ? 'badge-success' : 'badge-secondary'}`}>
                  Krok 2: {isStep2Valid() ? 'Poprawny' : 'Niepoprawny'}
                </span>
              </div>
              
              <hr />
              <p className="small mb-0">
                <strong>Walidacja:</strong><br />
                • Wszystkie pola wymagane<br />
                • Email w poprawnym formacie<br />
                • Imię i nazwisko min. 2 znaki
              </p>
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
            <strong>Konsola przeglądarki:</strong> Po ukończeniu formularza wyświetlany jest obiekt zawierający dane z obu kroków:
            <br />
            <code className="ml-1">{`{ personalData: {...}, preferences: {...} }`}</code>
            <br />
            Otwórz narzędzia deweloperskie (F12) aby zobaczyć logi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
