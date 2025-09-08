import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function DietPlanner() {
  const [mealName, setMealName] = useState('');
  const [mealCalories, setMealCalories] = useState('');
  const [mealDay, setMealDay] = useState('');

  const handleAdd = () => {
    const dayNames = {
      '1': 'Poniedziałek',
      '2': 'Wtorek',
      '3': 'Środa',
      '4': 'Czwartek',
      '5': 'Piątek',
      '6': 'Sobota',
      '7': 'Niedziela'
    };
    console.log(`nazwa: ${mealName}; kalorie: ${mealCalories}; dzien: ${dayNames[mealDay] || ''}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form>
        <div className="form-group">
          <label htmlFor="mealName">Nazwa posiłku</label>
          <input
            type="text"
            className="form-control"
            id="mealName"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mealCalories">Liczba kalorii</label>
          <input
            type="number"
            className="form-control"
            id="mealCalories"
            value={mealCalories}
            onChange={(e) => setMealCalories(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mealDay">Dzień tygodnia</label>
          <select
            className="form-control"
            id="mealDay"
            value={mealDay}
            onChange={(e) => setMealDay(e.target.value)}
          >
            <option value="">Wybierz dzień</option>
            <option value="1">Poniedziałek</option>
            <option value="2">Wtorek</option>
            <option value="3">Środa</option>
            <option value="4">Czwartek</option>
            <option value="5">Piątek</option>
            <option value="6">Sobota</option>
            <option value="7">Niedziela</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAdd}
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default DietPlanner;