import React, { Fragment } from 'react';

const Card = props => {
  const { feed, handleClick, clickable } = props;
  return clickable ? (
    <div className='Card' onClick={() => handleClick(feed._id)}>
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
};

export default Card;
