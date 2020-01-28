import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid } from 'semantic-ui-react';
import {deleteEvent, createEvent, updateEvent} from '../../../redux/events/eventActions';
import { connect } from 'react-redux';


class EventDashboard extends Component {
  
  handleDeleteEvent = (id) => 
    this.props.deleteEvent(id);
  
  render() {
    const {events} = this.props

    return (
      <Grid columns={2}>
        <Grid.Column width={10}>
          <EventList 
            events={events} 
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({events}) => ({
  events
})

const actions = {
  deleteEvent, updateEvent, createEvent
}

export default connect(mapStateToProps, actions)(EventDashboard);