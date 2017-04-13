import React from 'react';
import { taskClick, saveImage } from '../events';

const Task = ({task}) => {
  let button;
  let photo_button;
  let datetime_string = '[Date & time of completion]';
  let class_name;
  let button_symbol = '\u2713';

  function readURL() {
    let file = event.srcElement.ownerDocument.activeElement.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      saveImage(task, reader.result);
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

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
    photo_button = <input type='file' onChange={readURL}></input>;
  }

  let location_string = task.GPS ? `Coords(${Math.floor(task.GPS.latitude)}, ${Math.floor(task.GPS.longitude)})` : '[Location on completion]';

  return (
    <td>
      <div className={class_name}><strong>{task.description}</strong> {button}</div>
      <div>{datetime_string}</div>
      <div>{location_string}</div>
      <div>{photo_button}</div>
      <a className={'photograph'} href={task.photo} target='_'>[View photograph]</a>
    </td>
  );
};

export default Task;
