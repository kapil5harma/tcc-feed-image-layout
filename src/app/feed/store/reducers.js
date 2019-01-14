import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  feed: null
};

// *************************** Fetch Feed ****************************
const fetchFeedStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchFeedSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, feed: action.feed, loading: false };
};

const fetchFeedFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_FEED_START]: fetchFeedStart,
  [Types.FETCH_FEED_FAILURE]: fetchFeedFailure,
  [Types.FETCH_FEED_SUCCESS]: fetchFeedSuccess
};

// Create and Export Reducer
export const feedReducer = createReducer(INITIAL_STATE, HANDLERS);
