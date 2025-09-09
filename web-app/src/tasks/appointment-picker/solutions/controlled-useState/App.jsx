import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // State for form inputs
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  
  // State for appointment result and error
  const [appointmentResult, setAppointmentResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  // Handle name input change
  const handleNameChange = (event) => {
    setName(event.target.value)
    setErrorMessage('') // Clear error when user types
    setAppointmentResult(null) // Clear previous result
  }

  // Handle date input change
  const handleDateChange = (event) => {
    setDate(event.target.value)
    setErrorMessage('') // Clear error when user types
    setAppointmentResult(null) // Clear previous result
  }

  // Handle time input change
  const handleTimeChange = (event) => {
    setTime(event.target.value)
    setErrorMessage('') // Clear error when user types
    setAppointmentResult(null) // Clear previous result
  }

  // Validate if selected datetime is in the past
  const isDateTimeInPast = (selectedDate, selectedTime) => {
    if (!selectedDate || !selectedTime) return false
    
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`)
    const now = new Date()
    
    return selectedDateTime <= now
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // Clear previous results
    setErrorMessage('')
    setAppointmentResult(null)

    // Validation: check if all fields are filled
    if (!name.trim()) {
      setErrorMessage('Proszę wprowadzić imię')
      return
    }

    if (!date) {
      setErrorMessage('Proszę wybrać datę')
      return
    }

    if (!time) {
      setErrorMessage('Proszę wybrać godzinę')
      return
    }

    // Validation: check if datetime is in the past
    if (isDateTimeInPast(date, time)) {
      setErrorMessage('Nie można zarezerwować terminu w przeszłości. Wybierz przyszłą datę i godzinę.')
      return
    }

    // Create ISO datetime string
    const isoDateTime = new Date(`${date}T${time}`).toISOString()
    
    // Create appointment result
    const result = {
      name: name.trim(),
      iso: isoDateTime
    }

    setAppointmentResult(result)

    // Log to console as required
    console.log(result)

    // Reset form
    setName('')
    setDate('')
    setTime('')
  }

  // Reset form
  const handleReset = () => {
    setName('')
    setDate('')
    setTime('')
    setAppointmentResult(null)
    setErrorMessage('')
  }

  // Get current date and time for min attributes
  const getCurrentDate = () => {
    const now = new Date()
    return now.toISOString().split('T')[0]
  }

  const getCurrentTime = () => {
    const now = new Date()
    return now.toTimeString().slice(0, 5)
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Rezerwacja terminów</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Appointment Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Zarezerwuj termin</h5>
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
                  <label htmlFor="dateInput">Data:</label>
                  <input
                    type="date"
                    className={`form-control ${errorMessage && !date ? 'is-invalid' : ''}`}
                    id="dateInput"
                    value={date}
                    onChange={handleDateChange}
                    min={getCurrentDate()}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="timeInput">Godzina:</label>
                  <input
                    type="time"
                    className={`form-control ${errorMessage && !time ? 'is-invalid' : ''}`}
                    id="timeInput"
                    value={time}
                    onChange={handleTimeChange}
                    min={date === getCurrentDate() ? getCurrentTime() : '00:00'}
                    required
                  />
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
                    disabled={!name.trim() || !date || !time}
                  >
                    Zarezerwuj termin
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

          {/* Appointment Result */}
          {appointmentResult && (
            <div className="card">
              <div className="card-header bg-success text-white">
                <h5 className="card-title mb-0">Termin zarezerwowany pomyślnie!</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Szczegóły rezerwacji:</h6>
                    <ul className="list-unstyled">
                      <li><strong>Imię:</strong> {appointmentResult.name}</li>
                      <li><strong>Data:</strong> {new Date(appointmentResult.iso).toLocaleDateString('pl-PL')}</li>
                      <li><strong>Godzina:</strong> {new Date(appointmentResult.iso).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Format ISO:</h6>
                    <code className="d-block bg-light p-2 rounded">
                      {appointmentResult.iso}
                    </code>
                  </div>
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
                <li>• Wprowadź swoje imię</li>
                <li>• Wybierz datę wizyty (nie może być w przeszłości)</li>
                <li>• Wybierz godzinę wizyty</li>
                <li>• Kliknij "Zarezerwuj termin" aby potwierdzić</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć dane w formacie JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
