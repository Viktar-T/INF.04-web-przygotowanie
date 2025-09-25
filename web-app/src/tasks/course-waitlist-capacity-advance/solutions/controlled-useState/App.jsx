import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Programowanie w C#", capacity: 20, enrolled: 15 },
    { id: 2, name: "Angular dla początkujących", capacity: 15, enrolled: 15 },
    { id: 3, name: "Kurs Django", capacity: 25, enrolled: 10 }
  ])

  const [nameAndSurname, setNameAndSurname] = useState('')
  const [selectedCourseId, setSelectedCourseId] = useState('')

  // Load enrolled counts from localStorage on mount
  useEffect(() => {
    const savedEnrolled = localStorage.getItem('courseEnrolled')
    if (savedEnrolled) {
      try {
        const enrolledData = JSON.parse(savedEnrolled)
        setCourses(prevCourses => 
          prevCourses.map(course => ({
            ...course,
            enrolled: enrolledData[course.id] || course.enrolled
          }))
        )
      } catch (error) {
        console.error('Error loading enrolled data from localStorage:', error)
      }
    }
  }, [])

  // Save enrolled counts to localStorage whenever courses change
  useEffect(() => {
    const enrolledData = {}
    courses.forEach(course => {
      enrolledData[course.id] = course.enrolled
    })
    localStorage.setItem('courseEnrolled', JSON.stringify(enrolledData))
  }, [courses])

  const onNameAndSurnameChange = (event) => {
    setNameAndSurname(event.target.value)
  }

  const onCourseChange = (event) => {
    setSelectedCourseId(event.target.value)
  }
  
  const onSubmit = (event) => {
    event.preventDefault()
    
    if (!nameAndSurname.trim() || !selectedCourseId) {
      return
    }

    const courseId = parseInt(selectedCourseId)
    const selectedCourse = courses.find(course => course.id === courseId)
    
    if (selectedCourse) {
      if (selectedCourse.enrolled < selectedCourse.capacity) {
        // Increase enrolled count
        setCourses(prevCourses => 
          prevCourses.map(course => 
            course.id === courseId 
              ? { ...course, enrolled: course.enrolled + 1 }
              : course
          )
        )
        console.log(`Zapisano: ${nameAndSurname} na ${selectedCourse.name}`)
      } else {
        console.log(`Brak miejsc: ${selectedCourse.name}`)
      }
    }
    
    // Clear form
    setNameAndSurname('')
    setSelectedCourseId('')
  }

  const getRemainingSeats = (course) => {
    return course.capacity - course.enrolled
  }

  const isCourseFull = (course) => {
    return course.enrolled >= course.capacity
  }

  const isSubmitDisabled = () => {
    if (!nameAndSurname.trim() || !selectedCourseId) {
      return true
    }
    
    const courseId = parseInt(selectedCourseId)
    const selectedCourse = courses.find(course => course.id === courseId)
    
    return selectedCourse ? isCourseFull(selectedCourse) : true
  }

  return (
    <div className="container mt-4">
      <h2>Lista kursów</h2>
      
      <div className="row mb-4">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">
                  Zapisanych: {course.enrolled}/{course.capacity}
                </p>
                <span className={`badge ${getRemainingSeats(course) > 0 ? 'badge-success' : 'badge-danger'}`}>
                  Pozostało: {getRemainingSeats(course)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-4"> 
        <div className="form-group"> 
          <label htmlFor="imieNazw">Imię i nazwisko:</label> 
          <input 
            onChange={onNameAndSurnameChange}
            value={nameAndSurname}
            type="text" 
            className="form-control" 
            id="imieNazw"
            required
          /> 
        </div> 
        <div className="form-group"> 
          <label htmlFor="kurs">Kurs:</label> 
          <select 
            onChange={onCourseChange}
            value={selectedCourseId}
            className="form-control" 
            id="kurs"
            required
          >
            <option value="">Wybierz kurs...</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name} (Pozostało: {getRemainingSeats(course)})
              </option>
            ))}
          </select>
        </div> 
        <button 
          type="submit" 
          className={`btn ${isSubmitDisabled() ? 'btn-secondary' : 'btn-primary'}`}
          disabled={isSubmitDisabled()}
        >
          {isSubmitDisabled() && selectedCourseId ? 'Kurs pełny' : 'Zapisz'}
        </button>
      </form>
    </div>
  );
}

export default App;
