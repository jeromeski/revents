import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.events.map(({id,...event}) => <EventListItem key={id} {...event}/>)}
      </Fragment>
    );
  }
}

export default EventList;