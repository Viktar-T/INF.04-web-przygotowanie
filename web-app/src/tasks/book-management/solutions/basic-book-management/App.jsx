import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = () => {
    const genreText = {
      "1": "Powieść",
      "2": "Kryminał",
      "3": "Fantastyka",
      "4": "Biografia"
    }[genre] || '';
    console.log(`tytul: ${title}; autor: ${author}; gatunek: ${genreText}`);
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="bookTitle">Tytuł książki</label>
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookAuthor">Autor książki</label>
          <input
            type="text"
            className="form-control"
            id="bookAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookGenre">Gatunek</label>
          <select
            className="form-control"
            id="bookGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Wybierz gatunek</option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddBook}
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default BookForm;
