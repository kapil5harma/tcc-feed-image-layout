import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from '../feed/Feed';
import Post from '../post/Post';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        <Route path='/feed' exact strict component={Feed} />
        <Route path='/post/:id' exact strict component={Post} />
        <Redirect to='/feed' />
      </Switch>
    );
  }
}

export default MainPage;
