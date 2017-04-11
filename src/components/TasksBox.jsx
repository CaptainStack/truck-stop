import React from 'react';

const TasksBox = () => {
  return (
    <div className={'tasks-box'} >
      <h1>Tasks</h1>
      <ul>
        <li>Drop off deliveries</li>
        <li>Refill gas tank</li>
        <li>Call home</li>
      </ul>
    </div>
  );
};

export default TasksBox;