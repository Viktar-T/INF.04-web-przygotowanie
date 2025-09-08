// Home page component
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Exam Tasks Application</h1>
      <p>Welcome to the exam tasks application</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Available Tasks:</h2>
        <ul>
          <li>
            <Link to="/task/2022-02-22-06">2022-02-22-06 - Course Registration Form</Link>
          </li>
          <li>
            <Link to="/task/2023-03-23-06">2023-03-23-06 - Movie Form</Link>
          </li>
          <li>
            <Link to="/task/2025-01-25-01">2025-01-25-01 - Photo Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
