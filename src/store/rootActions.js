import {
  Types as postActionTypes,
  Creators as postActionCreators
} from '../app/post/store';
import {
  Types as feedActionTypes,
  Creators as feedActionCreators
} from '../app/feed/store';

const Types = {
  ...postActionTypes,
  ...feedActionTypes
};

const Creators = {
  ...postActionCreators,
  ...feedActionCreators
};

export { Types, Creators };
