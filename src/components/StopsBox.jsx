import React from 'react';
import { stopClick } from '../events';

const StopsBox = ({stops, selected_stop}) => {
  let stops_elements = stops.map(stop => {
    let classes = '';
    if (stop === selected_stop) {
      classes += 'selected ';
    }
    if (!stop.tasks.find(task => task.completed === false)) {
      classes += 'completed';
    }
    return <li onClick={stopClick(stop)} className={classes} >{stop.address}</li>
  });
  return (
    <div className={'stops-box'} >
      <h1>Stops</h1>
      <ul>
        {stops_elements}
      </ul>
    </div>
  );
};

export default StopsBox;