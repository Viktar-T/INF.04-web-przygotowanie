import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect, useRef } from 'react'

function App() {
  // State for stopwatch
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState([])
  
  // Ref for interval
  const intervalRef = useRef(null)

  // Start stopwatch
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1)
      }, 1000)
    }
  }

  // Stop stopwatch
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }

  // Reset stopwatch
  const handleReset = () => {
    setIsRunning(false)
    setElapsedSeconds(0)
    setLaps([])
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    // Log empty laps array as required
    console.log([])
  }

  // Add lap
  const handleLap = () => {
    if (isRunning && elapsedSeconds > 0) {
      const newLaps = [...laps, elapsedSeconds]
      setLaps(newLaps)
      
      // Log laps array as required
      console.log(newLaps)
    }
  }

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Format time display
  const formatTime = (seconds) => {
    return seconds.toString().padStart(2, '0')
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Stoper</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Stopwatch Display */}
          <div className="card mb-4">
            <div className="card-header text-center">
              <h5 className="card-title mb-0">Czas</h5>
            </div>
            <div className="card-body text-center">
              <div className="display-1 text-primary font-weight-bold">
                {formatTime(elapsedSeconds)}s
              </div>
              <div className="mt-3">
                <span className={`badge ${isRunning ? 'badge-success' : 'badge-secondary'}`}>
                  {isRunning ? 'Uruchomiony' : 'Zatrzymany'}
                </span>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Kontrola</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6 col-md-3 mb-2">
                  <button
                    className="btn btn-success btn-block"
                    onClick={handleStart}
                    disabled={isRunning}
                  >
                    Start
                  </button>
                </div>
                <div className="col-6 col-md-3 mb-2">
                  <button
                    className="btn btn-danger btn-block"
                    onClick={handleStop}
                    disabled={!isRunning}
                  >
                    Stop
                  </button>
                </div>
                <div className="col-6 col-md-3 mb-2">
                  <button
                    className="btn btn-warning btn-block"
                    onClick={handleReset}
                    disabled={isRunning}
                  >
                    Reset
                  </button>
                </div>
                <div className="col-6 col-md-3 mb-2">
                  <button
                    className="btn btn-info btn-block"
                    onClick={handleLap}
                    disabled={!isRunning || elapsedSeconds === 0}
                  >
                    Okrążenie
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Laps List */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">
                Okrążenia 
                <span className="badge badge-primary ml-2">{laps.length}</span>
              </h6>
            </div>
            <div className="card-body">
              {laps.length > 0 ? (
                <ol className="list-group list-group-flush">
                  {laps.map((lapTime, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>Okrążenie {index + 1}</span>
                      <span className="badge badge-primary badge-pill">
                        {formatTime(lapTime)}s
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="text-center text-muted py-3">
                  <p className="mb-0">Brak zapisanych okrążeń</p>
                  <small>Uruchom stoper i kliknij "Okrążenie" aby zapisać czas</small>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Instrukcje</h6>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                <li>• Kliknij "Start" aby uruchomić stoper</li>
                <li>• Kliknij "Stop" aby zatrzymać stoper</li>
                <li>• Kliknij "Reset" aby wyzerować czas i okrążenia</li>
                <li>• Kliknij "Okrążenie" aby zapisać aktualny czas</li>
                <li>• Przycisk "Okrążenie" jest aktywny tylko gdy stoper działa</li>
                <li>• Sprawdź konsolę przeglądarki aby zobaczyć logi okrążeń</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
