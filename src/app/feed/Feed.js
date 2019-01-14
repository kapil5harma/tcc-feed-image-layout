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

  goToPost = postId => {
    // console.log('postId: ', postId);
    this.props.history.push({
      pathname: 'post',
      state: {
        postId
      }
    });
  };

  render() {
    const { feed } = this.props;
    return (
      <div className='Feed'>
        {feed && feed.feed ? (
          feed.feed.map((feed, index) => {
            return (
              <Card
                key={feed._id}
                feed={feed}
                clickable={true}
                handleClick={() => this.goToPost(feed._id)}
              />
            );
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
