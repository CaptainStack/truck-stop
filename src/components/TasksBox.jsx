import React from 'react';
import { taskClick } from '../events';

const TasksBox = ({stop}) => {
  let task_elements;
  if (stop.tasks) {
    let tasks = stop.tasks;
    task_elements = tasks.map(task => <li onClick={taskClick(task)} className={task.completed ? 'completed' : null}>{task.description}</li>);
  }
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