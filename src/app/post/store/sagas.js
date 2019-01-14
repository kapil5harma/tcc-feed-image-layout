import axios from 'axios';
import { put } from 'redux-saga/effects';
import { Creators } from './actions';
import { apiEndpoints } from '../../../config/config';

// *************************** Fetch Post Saga ***************************
export function* fetchPostSaga(action) {
  try {
    const postId = action.postId;
    yield put(Creators.fetchPostStart());
    const url = `${apiEndpoints.feed}/${postId}`;
    const res = yield axios.get(url);
    const post = { ...res.data };
    yield put(Creators.fetchPostSuccess(post));
  } catch (err) {
    yield put(Creators.fetchPostFailure(err));
  }
}
// __________________________________________________________________________
