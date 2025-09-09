import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function ExpenseTracker() {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    console.log(`kategoria: ${category}; kwota: ${amount}; data: ${date}`);
    setExpenses([...expenses, { category, amount, date }]);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="expenseCategory">Kategoria wydatku</label>
          <input
            type="text"
            className="form-control"
            id="expenseCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenseAmount">Kwota</label>
          <input
            type="number"
            className="form-control"
            id="expenseAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenseDate">Data</label>
          <input
            type="date"
            className="form-control"
            id="expenseDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddExpense}>Dodaj</button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Kategoria</th>
            <th scope="col">Kwota</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody id="expenseTable">
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTracker;