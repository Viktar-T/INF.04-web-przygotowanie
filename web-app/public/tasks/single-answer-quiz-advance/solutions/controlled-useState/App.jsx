import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  // Static quiz data
  const [quizData] = useState({
    pytanie: "Który język programowania jest używany do tworzenia aplikacji webowych po stronie serwera?",
    odpowiedzi: [
      "JavaScript",
      "Python", 
      "HTML",
      "CSS"
    ],
    poprawnyIndex: 1 // Python is the correct answer (index 1)
  })

  // State for selected answer and quiz result
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [quizResult, setQuizResult] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // State for attempt counter
  const [attemptCount, setAttemptCount] = useState(0)

  // Load attempt count from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem('quizAttemptCount')
    if (savedCount) {
      try {
        const count = parseInt(savedCount)
        setAttemptCount(count)
      } catch (error) {
        console.error('Error loading attempt count from localStorage:', error)
      }
    }
  }, [])

  // Save attempt count to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('quizAttemptCount', attemptCount.toString())
  }, [attemptCount])

  // Handle radio button change
  const handleAnswerChange = (event) => {
    const answerIndex = parseInt(event.target.value)
    setSelectedAnswer(answerIndex)
    setQuizResult(null) // Reset result when answer changes
    setIsSubmitted(false) // Reset submission state
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (selectedAnswer === null) {
      return // No answer selected
    }

    setIsSubmitted(true)
    setAttemptCount(prev => prev + 1) // Increment attempt counter
    
    // Check if answer is correct
    const isCorrect = selectedAnswer === quizData.poprawnyIndex
    
    if (isCorrect) {
      setQuizResult("Poprawna")
      console.log("Poprawna")
    } else {
      setQuizResult("Błędna")
      console.log("Błędna")
    }
  }

  // Reset quiz
  const handleReset = () => {
    setSelectedAnswer(null)
    setQuizResult(null)
    setIsSubmitted(false)
  }

  // Reset attempt counter
  const handleResetCounter = () => {
    setAttemptCount(0)
    console.log("Licznik prób zresetowany")
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Quiz z jedną odpowiedzią</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Pytanie</h5>
              <span className="badge badge-info">
                Liczba prób: {attemptCount}
              </span>
            </div>
            <div className="card-body">
              <p className="card-text mb-4">{quizData.pytanie}</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {quizData.odpowiedzi.map((odpowiedz, index) => (
                    <div key={index} className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="quizAnswer"
                        id={`answer${index}`}
                        value={index}
                        checked={selectedAnswer === index}
                        onChange={handleAnswerChange}
                      />
                      <label 
                        className="form-check-label" 
                        htmlFor={`answer${index}`}
                      >
                        {odpowiedz}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-primary me-2"
                    disabled={selectedAnswer === null}
                  >
                    Sprawdź
                  </button>
                  
                  {isSubmitted && (
                    <button 
                      type="button" 
                      className="btn btn-secondary me-2"
                      onClick={handleReset}
                    >
                      Nowe pytanie
                    </button>
                  )}
                  
                  <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={handleResetCounter}
                  >
                    Reset licznika
                  </button>
                </div>
              </form>
              
              {/* Result display */}
              {isSubmitted && quizResult && (
                <div className={`alert mt-3 ${
                  quizResult === "Poprawna" 
                    ? "alert-success" 
                    : "alert-danger"
                }`}>
                  <h6 className="alert-heading">Wynik:</h6>
                  <p className="mb-0">
                    {quizResult === "Poprawna" 
                      ? "Gratulacje! Twoja odpowiedź jest poprawna." 
                      : "Niestety, odpowiedź jest niepoprawna. Spróbuj ponownie."
                    }
                  </p>
                  {quizResult === "Błędna" && (
                    <p className="mb-0 mt-2">
                      <small>
                        Poprawna odpowiedź: <strong>{quizData.odpowiedzi[quizData.poprawnyIndex]}</strong>
                      </small>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
