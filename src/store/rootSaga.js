import { takeLatest } from 'redux-saga/effects';

// Import all ActionTypes
import { Types } from './rootActions';

// Import all Sagas
import { fetchFeedSaga } from '../app/feed/store';
import { fetchPostSaga } from '../app/post/store';

export function* watchFeed() {
  yield takeLatest(Types.FETCH_FEED, fetchFeedSaga);
}
export function* watchPost() {
  yield takeLatest(Types.FETCH_POST, fetchPostSaga);
}
