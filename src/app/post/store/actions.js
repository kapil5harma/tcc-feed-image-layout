import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchPost: ['postId'],
  fetchPostStart: null,
  fetchPostSuccess: ['post'],
  fetchPostFailure: null
});

export { Types, Creators };
