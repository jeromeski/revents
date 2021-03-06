import React, { Component, Fragment } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignOutMenu from "../Menus/SignOutMenu";
import SignInMenu from "../Menus/SignInMenu";
import { openModal } from "../../modals/modalActions";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";

const mapDispatchToProps = {
  openModal
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => this.props.openModal("LoginModal");

  handleRegister = () => this.props.openModal("RegisterModal");

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" exact header>
            <img className="logo" src="/assets/logo.png" alt="logo" />
            Revents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />
          {authenticated && (
            <Fragment>
              <Menu.Item as={NavLink} to="/people" name="People" />
              <Menu.Item as={NavLink} to="/test" name="Test" />
              <Menu.Item>
                <Button
                  as={Link}
                  to="/createEvent"
                  floated="right"
                  positive
                  inverted
                  content="Create Event"
                />
              </Menu.Item>
            </Fragment>
          )}
          {authenticated ? (
            <SignInMenu signOut={this.handleSignOut} profile={profile} />
          ) : (
            <SignOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  withFirebase(connect(mapStateToProps, mapDispatchToProps)(NavBar))
);
