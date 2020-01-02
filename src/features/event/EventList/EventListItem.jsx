import React, { Component } from 'react';
import { Segment, Item, List, Button, Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {

    const { hostPhotoURL, title, hostedBy, date, venue, attendees, description  } = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{title}</Item.Header>
                <Item.Description>
                  Hosted by {hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date} |
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* todo: attendees go here */}
            {attendees && attendees.map(({id, ...attendee}) => <EventListAttendee key={id}  {...attendee}/>)}
          </List>
        </Segment>
        <Segment clearing>
          <span>{description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;