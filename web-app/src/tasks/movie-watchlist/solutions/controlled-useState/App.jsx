import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [genres] = useState([
    'Dramat',
    'Komedia',
    'Akcja',
    'Horror',
    'Sci-Fi'
  ])

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [rating, setRating] = useState('')

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const onRatingChange = (event) => {
    setRating(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    
    // Sprawdź czy film już istnieje (porównanie bez uwzględnienia wielkości liter)
    const movieExists = movies.some(movie => 
      movie.tytul.toLowerCase() === title.toLowerCase() && 
      movie.gatunek === selectedGenre
    )

    if (movieExists) {
      console.log("Film już istnieje w liście")
    } else {
      const newMovie = {
        tytul: title,
        gatunek: selectedGenre,
        ocena: rating
      }
      
      setMovies([...movies, newMovie])
      console.log(newMovie)
      
      // Wyczyść formularz
      setTitle('')
      setSelectedGenre('')
      setRating('')
    }
  }

  return (
    <div className="container mt-4">
      <h2>Lista filmów do obejrzenia</h2>
      
      <form onSubmit={onSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="tytul">Tytuł:</label>
          <input 
            onChange={onTitleChange}
            value={title}
            type="text" 
            className="form-control" 
            id="tytul"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="gatunek">Gatunek:</label>
          <select 
            onChange={onGenreChange}
            value={selectedGenre}
            className="form-control" 
            id="gatunek"
            required
          >
            <option value="">Wybierz gatunek...</option>
            {genres.map((genre, index) => (
              <option key={`genre-${index}`} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Ocena:</label>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={`rating-${value}`} className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="ocena" 
                  id={`ocena${value}`}
                  value={value}
                  checked={rating === value.toString()}
                  onChange={onRatingChange}
                  required
                />
                <label className="form-check-label" htmlFor={`ocena${value}`}>
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Dodaj
        </button>
      </form>

      {movies.length > 0 && (
        <div className="mt-4">
          <h3>Dodane filmy:</h3>
          <ul className="list-group">
            {movies.map((movie, index) => (
              <li key={`movie-${index}`} className="list-group-item">
                <strong>{movie.tytul}</strong> - {movie.gatunek} - Ocena: {movie.ocena}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
