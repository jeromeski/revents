import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import EventDetailedPage from "../../features/events/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/events/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../../features/modals/ModalManager";
import TestComponent from "../../features/test-area/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
