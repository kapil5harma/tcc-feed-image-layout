import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Card extends Component {
  goToPost = postId => {
    console.log('postId: ', postId);
    this.props.history.push({
      pathname: `/post/${postId}`,
      state: {
        postId
      }
    });
  };

  render() {
    const { feed, clickable } = this.props;

    return clickable ? (
      <div className='Card' onClick={() => this.goToPost(feed._id)}>
        <div>Clickable</div>
        <img src={feed.postContent[0]} alt={feed.postTitle} />
        <div className='title'>{feed.postTitle}</div>
        <div className='Creator'>
          <div className='left'>
            <img src={feed.creatorImage} alt={feed.creatorName} />
            <div className='name'>{feed.creatorName}</div>
          </div>
          <div className='right'>
            <div className='name'>{feed.postViews}</div>
          </div>
        </div>
      </div>
    ) : (
      <div className='Card'>
        <div>Not Clickable</div>
        <img src={feed.postContent[0]} alt={feed.postTitle} />
        <div className='title'>{feed.postTitle}</div>
        <div className='Creator'>
          <div className='left'>
            <img src={feed.creatorImage} alt={feed.creatorName} />
            <div className='name'>{feed.creatorName}</div>
          </div>
          <div className='right'>
            <div className='name'>{feed.postViews}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
