import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  // State for form inputs
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('Niski')
  
  // State for tasks and filters
  const [tasks, setTasks] = useState([])
  const [filters, setFilters] = useState({
    Niski: true,
    Średni: true,
    Wysoki: true
  })

  // Handle task text change
  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  // Handle priority change
  const handlePriorityChange = (event) => {
    setPriority(event.target.value)
  }

  // Handle filter toggle
  const handleFilterToggle = (priorityLevel) => {
    setFilters(prev => ({
      ...prev,
      [priorityLevel]: !prev[priorityLevel]
    }))
  }

  // Add new task
  const handleAddTask = (event) => {
    event.preventDefault()
    
    const trimmedText = taskText.trim()
    
    // Validation: check if task text is not empty
    if (!trimmedText) {
      return
    }

    // Create new task
    const newTask = {
      id: Date.now(), // Simple unique ID
      text: trimmedText,
      priority: priority
    }

    // Add to tasks array
    setTasks(prev => [...prev, newTask])

    // Log task data as required
    console.log({ text: trimmedText, priority: priority })

    // Reset form
    setTaskText('')
    setPriority('Niski')
  }

  // Get filtered tasks
  const getFilteredTasks = () => {
    return tasks.filter(task => filters[task.priority])
  }

  // Get priority badge class
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Wysoki':
        return 'bg-danger'
      case 'Średni':
        return 'bg-warning'
      case 'Niski':
        return 'bg-success'
      default:
        return 'bg-secondary'
    }
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista zadań z priorytetami</h2>
      
      <div className="row">
        <div className="col-md-6">
          {/* Add Task Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Dodaj nowe zadanie</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleAddTask}>
                <div className="form-group">
                  <label htmlFor="taskInput">Zadanie:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskInput"
                    value={taskText}
                    onChange={handleTaskTextChange}
                    placeholder="Wprowadź treść zadania..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Priorytet:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priority"
                      id="priorityLow"
                      value="Niski"
                      checked={priority === 'Niski'}
                      onChange={handlePriorityChange}
                    />
                    <label className="form-check-label" htmlFor="priorityLow">
                      Niski
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priority"
                      id="priorityMed"
                      value="Średni"
                      checked={priority === 'Średni'}
                      onChange={handlePriorityChange}
                    />
                    <label className="form-check-label" htmlFor="priorityMed">
                      Średni
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priority"
                      id="priorityHigh"
                      value="Wysoki"
                      checked={priority === 'Wysoki'}
                      onChange={handlePriorityChange}
                    />
                    <label className="form-check-label" htmlFor="priorityHigh">
                      Wysoki
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!taskText.trim()}
                >
                  Dodaj zadanie
                </button>
              </form>
            </div>
          </div>

          {/* Filters */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Filtry priorytetów</h6>
            </div>
            <div className="card-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="filterLow"
                  checked={filters.Niski}
                  onChange={() => handleFilterToggle('Niski')}
                />
                <label className="form-check-label" htmlFor="filterLow">
                  <span className="badge bg-success me-2">Niski</span>
                  Pokaż zadania o niskim priorytecie
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="filterMed"
                  checked={filters.Średni}
                  onChange={() => handleFilterToggle('Średni')}
                />
                <label className="form-check-label" htmlFor="filterMed">
                  <span className="badge bg-warning me-2">Średni</span>
                  Pokaż zadania o średnim priorytecie
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="filterHigh"
                  checked={filters.Wysoki}
                  onChange={() => handleFilterToggle('Wysoki')}
                />
                <label className="form-check-label" htmlFor="filterHigh">
                  <span className="badge bg-danger me-2">Wysoki</span>
                  Pokaż zadania o wysokim priorytecie
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Tasks List */}
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">
                Lista zadań
                <span className="badge bg-primary ms-2">
                  {filteredTasks.length} / {tasks.length}
                </span>
              </h6>
            </div>
            <div className="card-body">
              {filteredTasks.length > 0 ? (
                <ol className="list-group list-group-flush">
                  {filteredTasks.map((task, index) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <span className="font-weight-bold">{index + 1}.</span>
                        <span className="ms-2">{task.text}</span>
                      </div>
                      <span className={`badge ${getPriorityBadgeClass(task.priority)}`}>
                        {task.priority}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="text-center text-muted py-3">
                  {tasks.length === 0 ? (
                    <div>
                      <p className="mb-0">Brak zadań</p>
                      <small>Dodaj pierwsze zadanie używając formularza</small>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-0">Brak widocznych zadań</p>
                      <small>Włącz filtry aby zobaczyć zadania</small>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="card mt-4">
            <div className="card-header">
              <h6 className="card-title mb-0">Statystyki</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-4">
                  <h5 className="text-danger">{tasks.filter(t => t.priority === 'Wysoki').length}</h5>
                  <small className="text-muted">Wysoki</small>
                </div>
                <div className="col-4">
                  <h5 className="text-warning">{tasks.filter(t => t.priority === 'Średni').length}</h5>
                  <small className="text-muted">Średni</small>
                </div>
                <div className="col-4">
                  <h5 className="text-success">{tasks.filter(t => t.priority === 'Niski').length}</h5>
                  <small className="text-muted">Niski</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="card mt-4">
        <div className="card-header">
          <h6 className="card-title mb-0">Instrukcje</h6>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li>• Wprowadź treść zadania w pole tekstowe</li>
            <li>• Wybierz priorytet zadania (Niski, Średni, Wysoki)</li>
            <li>• Kliknij "Dodaj zadanie" aby dodać do listy</li>
            <li>• Użyj filtrów aby pokazać/ukryć zadania o określonych priorytetach</li>
            <li>• Sprawdź konsolę przeglądarki aby zobaczyć logi dodanych zadań</li>
            <li>• Priorytety są oznaczone kolorami: czerwony (wysoki), żółty (średni), zielony (niski)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
