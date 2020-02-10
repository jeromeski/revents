import React, { Component } from "react";
import EventList from "../EventList/EventList";
import { Grid } from "semantic-ui-react";
import {
  deleteEvent,
  createEvent,
  updateEvent
} from "../../../redux/events/eventActions";
import { connect } from "react-redux";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

class EventDashboard extends Component {
  handleDeleteEvent = id => this.props.deleteEvent(id);

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent />;
    return (
      <Grid columns={2}>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const mapDispatchToProps = {
  deleteEvent,
  updateEvent,
  createEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
