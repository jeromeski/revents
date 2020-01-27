import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, selectEvent, updateEvent, deleteEvent} = this.props
    return (
      <Fragment>
        {events.map(event => (
          <EventListItem key={event.id} selectEvent={selectEvent} event={event} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
          )
        )}
      </Fragment>
    );
  }
}

export default EventList;