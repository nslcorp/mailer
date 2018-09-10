import * as types from './types';

export default (state = null, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case types.FETCH_USER:
      return payload || false;

    default:
      return state;
  }
};
