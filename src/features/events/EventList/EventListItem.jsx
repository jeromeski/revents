import React, { Component } from 'react';
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';

class EventListItem extends Component {
  render() {

    const { event, selectEvent, deleteEvent } = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by {event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* todo: attendees go here */}
            {event.attendees && event.attendees.map(({id, ...attendee}) => <EventListAttendee key={id}  {...attendee}/>)}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button 
            onClick={() => deleteEvent(event.id)} 
            color='red' 
            as='a' 
            content='Delete' 
            floated="right" />
          <Button onClick={() => selectEvent(event)} 
            as={Link} 
            to={`/events/${event.id}`}
            color="teal" 
            floated="right" 
            content="View" />      
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;