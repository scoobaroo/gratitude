import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';
import ListForm from './ListForm'

export default class CommentBox extends React.Component{
  render: function() {
    return (
      <div className="commentBox">
        <NotAuthenticated>
          <LoginLink>Login</LoginLink>
        </NotAuthenticated>
        <Authenticated>
          <LogoutLink>Logout</LogoutLink>
        </Authenticated>
        <h1>Gratitude List</h1>
        Hello, world! I am a CommentBox.
        <ListForm />
      </div>
    );
  }
}
