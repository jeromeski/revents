import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid } from 'semantic-ui-react';

class EventDashboard extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={10}>
          <EventList/>
        </Grid.Column>
        <Grid.Column width={6}>
        
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;