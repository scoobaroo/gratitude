import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';
import ListForm from './ListForm'

export default class Comment extends React.Component{
  render() {
    return (
      <div className="comment">
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
