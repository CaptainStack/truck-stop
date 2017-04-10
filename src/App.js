import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2><a href='.'>TRUCK STOP</a></h2>
        </header>
        <div id='main-content'>
          <div id='stops-box'>
            <h1>Stops</h1>
            <ul>
              <li>Seattle</li>
              <li>Portland</li>
              <li>San Francisco</li>
            </ul>
          </div>
          <div id='tasks-box'>
            <h1>Tasks</h1>
            <ul>
              <li>Drop off deliveries</li>
              <li>Refill gas tank</li>
              <li>Call home</li>
            </ul>
          </div>
          <footer>
            <div><a href='https://captainstack.github.io/public-stackhouse' target='_blank'><p>© 2017 by Andre Stackhouse</p></a></div>
            <div><a href='https://github.com/CaptainStack/truck-stop' target='_blank'><p>View source on GitHub</p></a></div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
