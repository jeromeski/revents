import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

const SignOutMenu = ({signIn}) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" 
        onClick={signIn}
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default withRouter(SignOutMenu);

// allan.p@albasupplies.com