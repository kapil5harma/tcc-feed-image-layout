import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators } from './store/actions';
import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card';

class Feed extends Component {
  componentDidMount = () => {
    this.props.onFetchFeed();
  };

  render() {
    const { feed } = this.props;
    console.log('feed: ', feed);
    return (
      <div className='Feed'>
        {feed && feed.feed ? (
          feed.feed.map(feed => {
            return <Card key={feed._id} feed={feed} clickable={true} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchFeed: () => dispatch(Creators.fetchFeed())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Feed));
