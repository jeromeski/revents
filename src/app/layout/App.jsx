import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Revents</h1>
        <EventDashboard/>
      </div>
    );
  }
}

export default App;
