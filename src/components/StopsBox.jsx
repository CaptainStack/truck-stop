import React from 'react';
import { stopClick } from '../events';

const StopsBox = ({stops, selected_stop}) => {
  let stops_elements = stops.map(stop => <li onClick={stopClick(stop)} className={stop.type === selected_stop.type && 
                                                                                  stop.arrivalTime === selected_stop.arrivalTime &&
                                                                                  stop.address === selected_stop.address ? 'selected' : null} >{stop.address}</li>);
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