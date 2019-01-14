import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch Photos Saga ***************************
export function* fetchFeedSaga(action) {
  // console.log('action: ', action);
  try {
    // const groupId = action.groupId;
    yield put(Creators.fetchFeedStart());
    const url = apiEndpoints.feed;
    // console.log('url: ', url);
    const res = yield axios.get(url);
    // console.log('res: ', res);
    const feed = [];
    for (let key in res.data) {
      feed.push({
        id: key,
        ...res.data[key]
      });
    }
    // console.log('feed: ', feed);
    yield put(Creators.fetchFeedSuccess(feed));
  } catch (err) {
    yield put(Creators.fetchFeedFailure(err));
  }
}
// __________________________________________________________________________
