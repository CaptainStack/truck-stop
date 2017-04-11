import React from 'react';
import ChecklistManager from './components/ChecklistManager';
import './App.css';

const App = ({state}) => {
  return (
    <div className="App">
      <header>
        <h2><a href='.'>TRUCK STOP</a></h2>
      </header>
      <div id='main-container'>
        <ChecklistManager state={state} />
        <footer>
          <div><a href='https://captainstack.github.io/public-stackhouse' target='_blank'><p>© 2017 by Andre Stackhouse</p></a></div>
          <div><a href='https://github.com/CaptainStack/truck-stop' target='_blank'><p>View source on GitHub</p></a></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
