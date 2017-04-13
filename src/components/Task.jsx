import React from 'react';
import { taskClick } from '../events';

const Task = ({task}) => {
  let button;
  let datetime_string = '[Date & time of completion]';
  let class_name;
  let button_symbol = '\u2713';

  if (task.completed) {
    class_name = 'completed';
    let date = new Date(task.completed);
    datetime_string = `${date.toLocaleTimeString()} on ${date.toLocaleDateString()}`;
    button_symbol = 'X';
  }

  if (task.description === 'Receive Bill of Lading') {
    button = <button onClick={taskClick(task)}>{button_symbol}</button>;
  } else if (task.description === 'Bill of Lading Signed') {
    button = <button onClick={taskClick(task)}>{button_symbol}</button>;
  } else {
    button = <button onClick={taskClick(task)}>{button_symbol}</button>;
  }

  let location_string = task.GPS ? `Coords(${Math.floor(task.GPS.latitude)}, ${Math.floor(task.GPS.longitude)})` : '[Location on completion]';

  return (
    <td>
      <span className={class_name}><strong>{task.description}</strong> {button}</span><br/>
      <span>{datetime_string}</span><br/>
      <span>{location_string}</span>
    </td>
  );
};

export default Task;
