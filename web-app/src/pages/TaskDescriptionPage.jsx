// Task description page component
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDescriptionPage = () => {
  const { taskId } = useParams();

  return (
    <div>
      <h1>Task Description</h1>
      <p><strong>Task ID:</strong> {taskId}</p>
      <p>Task description content will be displayed here</p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Available Solutions:</h3>
        <ul>
          <li>
            <Link to={`/app/${taskId}/controlled-useState`}>View App (Controlled useState)</Link>
          </li>
          <li>
            <Link to={`/code/${taskId}/controlled-useState`}>View Code (Controlled useState)</Link>
          </li>
          {taskId === '2022-02-22-06' && (
            <>
              <li>
                <Link to={`/app/${taskId}/uncontrolled-useRef`}>View App (Uncontrolled useRef)</Link>
              </li>
              <li>
                <Link to={`/code/${taskId}/uncontrolled-useRef`}>View Code (Uncontrolled useRef)</Link>
              </li>
            </>
          )}
          {taskId === '2023-03-23-06' && (
            <>
              <li>
                <Link to={`/app/${taskId}/basic-form`}>View App (Basic Form)</Link>
              </li>
              <li>
                <Link to={`/code/${taskId}/basic-form`}>View Code (Basic Form)</Link>
              </li>
            </>
          )}
          {taskId === '2025-01-25-01' && (
            <>
              <li>
                <Link to={`/app/${taskId}/gallery-basic`}>View App (Gallery Basic)</Link>
              </li>
              <li>
                <Link to={`/code/${taskId}/gallery-basic`}>View Code (Gallery Basic)</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default TaskDescriptionPage;
