import React from 'react';

const TasksBox = ({stop}) => {
  let tasks;
  if (stop.type) {
    tasks = stop.type === 'PICKUP' ? ['Receive Bill of Lading'] : ['Bill of Lading Signed'];
    tasks.unshift('Photograph Inventory');
  } else {
    tasks = ['Please select a job and stop'];
  }
  let task_elements = tasks.map(task => <li>{task}</li>);
  return (
    <div className={'tasks-box'} >
      <h1>Tasks</h1>
      <ul>
        {task_elements}
      </ul>
    </div>
  );
};

export default TasksBox;