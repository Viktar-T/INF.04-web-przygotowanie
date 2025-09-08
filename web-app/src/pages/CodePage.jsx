// Code page component - displays source code
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CodePage = () => {
  const { taskId, solutionType } = useParams();

  return (
    <div>
      <h1>Source Code</h1>
      <p><strong>Task ID:</strong> {taskId}</p>
      <p><strong>Solution Type:</strong> {solutionType}</p>
      <p>Source code will be displayed here</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Navigation:</h3>
        <ul>
          <li>
            <Link to={`/app/${taskId}/${solutionType}`}>View Running Application</Link>
          </li>
          <li>
            <Link to={`/task/${taskId}`}>← Back to Task Description</Link>
          </li>
          <li>
            <Link to="/">← Back to Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodePage;
