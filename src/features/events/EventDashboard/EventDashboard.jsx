import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid, Button } from 'semantic-ui-react';
import EventForm from '../EventForm/EventForm';
import {deleteEvent, createEvent, updateEvent} from '../../../redux/events/eventActions';
import { connect } from 'react-redux';
import cuid from 'cuid';



class EventDashboard extends Component {

  state={
    isOpen: false,
    selectedEvent: null
  }

  handleIsOpenToggle = () => {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }))
  }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectEvent: null
    })
  }

  handleCancelForm = () => 
    this.setState({isOpen: false});
  
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.props.createEvent(newEvent);
    this.setState(({
      isOpen: false
    }));
  }

  handleSelectEvent = (event) => {
    return(
      this.setState({
        selectedEvent: event,
        isOpen: true
      })
    )}

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
    this.setState(({
      isOpen: false,
      selectedEvent: null
    }))
  }

  handleDeleteEvent = (id) => 
    this.props.deleteEvent(id);
  
  render() {
    const {isOpen, selectedEvent} = this.state
    const {events} = this.props

    return (
      <Grid columns={2}>
        <Grid.Column width={10}>
          <EventList 
            events={events} 
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button 
            positive 
            content={'Create Event'} 
            onClick={this.handleCreateFormOpen}/>
            { isOpen && 
              <EventForm
                key={selectedEvent ? selectedEvent.id : 0}
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent} 
                cancelFormOpen={this.handleCancelForm}
              />
            }
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