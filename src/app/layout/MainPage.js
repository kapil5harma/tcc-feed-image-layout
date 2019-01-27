import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from '../feed/Feed';
import Post from '../post/Post';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/feed' exact strict component={Feed} />
        <Route path='/post/:id' exact strict component={Post} /> */}
        <Route path='/page1' exact strict component={Page1} />
        <Route path='/page2' exact strict component={Page2} />
        <Route path='/page3' exact strict component={Page3} />

        <Redirect to='/page1' />
      </Switch>
    );
  }
}

export default MainPage;
