import { combineReducers } from 'redux';
import { postReducer } from '../app/post/store';
import { feedReducer } from '../app/feed/store';

const rootReducer = combineReducers({
  post: postReducer,
  feed: feedReducer
});

export default rootReducer;
