import React from 'react';
import Task from './Task';

const Stop = ({stop}) => {
  let stop_status; 
  let incomplete_tasks_count = 0;
  let task_cells = stop.tasks.map(task => {
    if (!task.completed) {
      incomplete_tasks_count++;
    }
    return <Task task={task} />
  });
  
  switch(incomplete_tasks_count) {
    case 0:
      stop_status = 'Completed';
      break;
    case stop.tasks.length:
      stop_status = 'Not Started';
      break;
    default:
      stop_status = 'In progress';
    }
  let arrival_date = new Date(stop.arrivalTime);

  return(
    <tr>
      <td>{stop.type}</td>
      <td>{stop.address}</td>
      <td>{stop.cargoDescription}</td>
      <td>
        {`${arrival_date.toLocaleDateString()}`}<br/>
        {`${arrival_date.toLocaleTimeString()}`}
      </td>
      {task_cells}
      <td>{stop_status}</td>
    </tr>);
};

export default Stop;
