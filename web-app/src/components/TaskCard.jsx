// Task card component for displaying task information
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task?.title || 'Task Title'}</h3>
      <p>{task?.description || 'Task description'}</p>
      {/* Task card content will be implemented here */}
    </div>
  );
};

export default TaskCard;
