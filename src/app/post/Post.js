import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Creators } from './store/actions';
import Spinner from '../Spinner/Spinner';
import Card from '../Card/Card';
import Feed from '../feed/Feed';

class Post extends Component {
  componentDidMount = () => {
    this.props.onFetchPost(this.props.location.state.postId);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location.state.postId !== prevProps.location.state.postId) {
      this.props.onFetchPost(this.props.location.state.postId);
      window.scrollTo(0, 0);
    }
  };

  render() {
    const { post } = this.props;
    return (
      <div className='Post'>
        {post ? (
          <Card key={post._id} feed={post} clickable={false} />
        ) : (
          <Spinner />
        )}
        <div style={{ fontWeight: '500', margin: '2rem 1rem 0.75rem 0' }}>
          Related Posts:
        </div>
        <div className='Related'>
          <Feed />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPost: postId => dispatch(Creators.fetchPost(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post));
