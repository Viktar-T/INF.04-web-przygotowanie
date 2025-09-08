// App page component - displays the actual application
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AppPage = () => {
  const { taskId, solutionType } = useParams();

  return (
    <div>
      <h1>Application</h1>
      <p><strong>Task ID:</strong> {taskId}</p>
      <p><strong>Solution Type:</strong> {solutionType}</p>
      <p>Interactive application will be displayed here</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Navigation:</h3>
        <ul>
          <li>
            <Link to={`/task/${taskId}`}>← Back to Task Description</Link>
          </li>
          <li>
            <Link to={`/code/${taskId}/${solutionType}`}>View Source Code</Link>
          </li>
          <li>
            <Link to="/">← Back to Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppPage;
