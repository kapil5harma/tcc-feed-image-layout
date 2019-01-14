import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
  loading: false,
  post: null
};

// *************************** Fetch Post ****************************
const fetchPostStart = (state = INITIAL_STATE, action) => {
  return { ...state, loading: true };
};

const fetchPostSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, post: action.post, loading: false };
};

const fetchPostFailure = (state = INITIAL_STATE, action) => {
  return { ...state, loading: false };
};
// _____________________________________________________________________

// Define Handlers
const HANDLERS = {
  [Types.FETCH_POST_START]: fetchPostStart,
  [Types.FETCH_POST_FAILURE]: fetchPostFailure,
  [Types.FETCH_POST_SUCCESS]: fetchPostSuccess
};

// Create and Export Reducer
export const postReducer = createReducer(INITIAL_STATE, HANDLERS);
