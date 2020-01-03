import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, selectEvent} = this.props
    return (
      <Fragment>
        {events.map(({id,...event}) => <EventListItem key={id} {...event} selectEvent={selectEvent} event={event}/>)}
      </Fragment>
    );
  }
}

export default EventList;