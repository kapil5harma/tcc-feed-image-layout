import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch Photos Saga ***************************
export function* fetchFeedSaga(action) {
  try {
    yield put(Creators.fetchFeedStart());
    const url = apiEndpoints.feed;
    const res = yield axios.get(url);
    const feed = [];
    for (let key in res.data) {
      feed.push({
        id: key,
        ...res.data[key]
      });
    }
    yield put(Creators.fetchFeedSuccess(feed));
  } catch (err) {
    yield put(Creators.fetchFeedFailure(err));
  }
}
// __________________________________________________________________________
