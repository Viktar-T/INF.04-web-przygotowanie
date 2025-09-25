import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Constants
  const MAX_COMMENT_LENGTH = 200

  // State for form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  
  // State for form result and error
  const [feedbackResult, setFeedbackResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  
  // State for feedback history
  const [feedbackHistory, setFeedbackHistory] = useState([])

  // Load feedback history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('feedbackHistory')
    if (savedHistory) {
      try {
        const history = JSON.parse(savedHistory)
        setFeedbackHistory(history)
      } catch (error) {
        console.error('Error loading feedback history from localStorage:', error)
      }
    }
  }, [])

  // Save feedback history to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory))
  }, [feedbackHistory])

  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value)
    setErrorMessage('') // Clear error when user types
    setFeedbackResult(null) // Clear previous result
  }

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setErrorMessage('') // Clear error when user types
    setFeedbackResult(null) // Clear previous result
  }

  // Handle comment input change
  const handleCommentChange = (event) => {
    const value = event.target.value
    // Limit to max length
    if (value.length <= MAX_COMMENT_LENGTH) {
      setComment(value)
      setErrorMessage('') // Clear error when user types
      setFeedbackResult(null) // Clear previous result
    }
  }

  // Simple email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Calculate remaining characters
  const getRemainingCharacters = () => {
    return MAX_COMMENT_LENGTH - comment.length
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // Clear previous results
    setErrorMessage('')
    setFeedbackResult(null)

    // Validation: check if all fields are filled
    if (!name.trim()) {
      setErrorMessage('Proszę wprowadzić imię')
      return
    }

    if (!email.trim()) {
      setErrorMessage('Proszę wprowadzić adres email')
      return
    }

    if (!comment.trim()) {
      setErrorMessage('Proszę wprowadzić komentarz')
      return
    }

    // Validation: check email format
    if (!isValidEmail(email)) {
      setErrorMessage('Proszę wprowadzić poprawny adres email')
      return
    }

    // Validation: check comment length
    if (comment.length > MAX_COMMENT_LENGTH) {
      setErrorMessage(`Komentarz nie może przekraczać ${MAX_COMMENT_LENGTH} znaków`)
      return
    }

    // Create feedback result
    const result = {
      name: name.trim(),
      email: email.trim(),
      comment: comment.trim()
    }

    setFeedbackResult(result)

    // Add to feedback history
    const historyRecord = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      comment: comment.trim(),
      commentLength: comment.length,
      timestamp: new Date().toLocaleString()
    }
    setFeedbackHistory(prev => [...prev, historyRecord])

    // Log to console as required
    console.log(result)

    // Reset form
    setName('')
    setEmail('')
    setComment('')
  }

  // Reset form
  const handleReset = () => {
    setName('')
    setEmail('')
    setComment('')
    setFeedbackResult(null)
    setErrorMessage('')
  }

  // Clear feedback history
  const clearFeedbackHistory = () => {
    setFeedbackHistory([])
    console.log("Historia opinii wyczyszczona")
  }

  // Get character counter color based on remaining characters
  const getCounterColor = () => {
    const remaining = getRemainingCharacters()
    if (remaining <= 30) return 'text-danger'
    if (remaining <= 50) return 'text-warning'
    return 'text-muted'
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Formularz opinii</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-10">
          {/* Feedback Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Wyślij swoją opinię</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="nameInput">Imię:</label>
                  <input
                    type="text"
                    className={`form-control ${errorMessage && !name.trim() ? 'is-invalid' : ''}`}
                    id="nameInput"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Wprowadź swoje imię"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="emailInput">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${errorMessage && (!email.trim() || !isValidEmail(email)) ? 'is-invalid' : ''}`}
                    id="emailInput"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Wprowadź swój adres email"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="commentInput">Komentarz:</label>
                  <textarea
                    className={`form-control ${errorMessage && (!comment.trim() || comment.length > MAX_COMMENT_LENGTH) ? 'is-invalid' : ''}`}
                    id="commentInput"
                    rows="4"
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Wprowadź swój komentarz (maksymalnie 200 znaków)"
                    maxLength={MAX_COMMENT_LENGTH}
                    required
                  />
                  <div className="d-flex justify-content-between mt-1">
                    <small className={`form-text ${getCounterColor()}`}>
                      Pozostało: {getRemainingCharacters()} znaków
                    </small>
                    <small className="text-muted">
                      {comment.length}/{MAX_COMMENT_LENGTH}
                    </small>
                  </div>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="alert alert-danger">
                    {errorMessage}
                  </div>
                )}

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!name.trim() || !email.trim() || !comment.trim() || !isValidEmail(email)}
                  >
                    Wyślij opinię
                  </button>
                  
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Wyczyść formularz
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Feedback Result */}
          {feedbackResult && (
            <div className="card mb-4">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Opinia została wysłana pomyślnie!</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Podsumowanie:</h6>
                    <ul className="list-unstyled">
                      <li><strong>Imię:</strong> {feedbackResult.name}</li>
                      <li><strong>Email:</strong> {feedbackResult.email}</li>
                      <li><strong>Długość komentarza:</strong> {feedbackResult.comment.length} znaków</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Komentarz:</h6>
                    <div className="bg-light p-3 rounded">
                      <p className="mb-0">{feedbackResult.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Feedback History */}
          {feedbackHistory.length > 0 && (
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Historia opinii</h5>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearFeedbackHistory}
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
                        <th scope="col">Imię</th>
                        <th scope="col">Email</th>
                        <th scope="col">Długość komentarza</th>
                        <th scope="col">Data wysłania</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedbackHistory.map((feedback, index) => (
                        <tr key={feedback.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{feedback.name}</td>
                          <td>{feedback.email}</td>
                          <td>{feedback.commentLength} znaków</td>
                          <td>{feedback.timestamp}</td>
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
                <li>• Wprowadź swoje imię</li>
                <li>• Wprowadź poprawny adres email</li>
                <li>• Napisz komentarz (maksymalnie {MAX_COMMENT_LENGTH} znaków)</li>
                <li>• Licznik pokazuje pozostałe znaki w czasie rzeczywistym</li>
                <li>• Licznik zmienia kolor gdy pozostało ≤ 30 znaków</li>
                <li>• Kliknij "Wyślij opinię" aby potwierdzić</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć dane w formacie JSON</li>
                <li>• Historia opinii jest automatycznie zapisywana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
