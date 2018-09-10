import * as types from './types';

const initialState = { auth: false };

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case types.FETCH_USER:
      return {};

    default:
      return state;
  }
};
