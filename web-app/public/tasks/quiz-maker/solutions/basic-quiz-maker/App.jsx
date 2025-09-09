import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function QuizApp() {
  const [quizQuestion, setQuizQuestion] = useState('');
  const [quizAnswers, setQuizAnswers] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleAddQuestion = () => {
    if (quizQuestion.trim() && quizAnswers.every(answer => answer.trim()) && correctAnswer) {
      const newQuestion = {
        question: quizQuestion,
        answers: quizAnswers,
        correct: correctAnswer,
      };
      console.log(`pytanie: ${newQuestion.question}; odpowiedzi: [${newQuestion.answers.join(', ')}]; poprawna: ${newQuestion.correct}`);
      setQuestionsList([...questionsList, newQuestion]);
      setQuizQuestion('');
      setQuizAnswers(['', '', '', '']);
      setCorrectAnswer('');
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="form-group">
          <label htmlFor="quizQuestion">Pytanie</label>
          <input
            type="text"
            className="form-control"
            id="quizQuestion"
            value={quizQuestion}
            onChange={e => setQuizQuestion(e.target.value)}
          />
        </div>
        {quizAnswers.map((answer, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`quizAnswer${index + 1}`}>Odpowiedź {index + 1}</label>
            <input
              type="text"
              className="form-control"
              id={`quizAnswer${index + 1}`}
              value={answer}
              onChange={e => {
                const newAnswers = [...quizAnswers];
                newAnswers[index] = e.target.value;
                setQuizAnswers(newAnswers);
              }}
            />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="correctAnswer">Poprawna odpowiedź</label>
          <select
            className="form-control"
            id="correctAnswer"
            value={correctAnswer}
            onChange={e => setCorrectAnswer(e.target.value)}
          >
            <option value="">Wybierz poprawną odpowiedź</option>
            <option value="1">Odpowiedź 1</option>
            <option value="2">Odpowiedź 2</option>
            <option value="3">Odpowiedź 3</option>
            <option value="4">Odpowiedź 4</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddQuestion}>
          Dodaj pytanie
        </button>
      </form>
      <h3 className="mt-4">Dodane pytania:</h3>
      <ul id="quizQuestionsList" className="list-group mt-2">
        {questionsList.map((item, index) => (
          <li key={index} className="list-group-item">
            {`Pytanie: ${item.question}; Odpowiedzi: ${item.answers.join(', ')}; Poprawna: Odpowiedź ${item.correct}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizApp;