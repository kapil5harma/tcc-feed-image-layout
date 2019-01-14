import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // fetchFeed: ['groupId'],
  fetchFeed: null,
  fetchFeedStart: null,
  fetchFeedSuccess: ['feed'],
  fetchFeedFailure: null
});

export { Types, Creators };
