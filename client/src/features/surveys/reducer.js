import * as types from './types';
const initialState = {
  loading: false,
  entities: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_SURVEYS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_SURVEYS_SUCCESS:
      return {
        entities: payload,
        loading: false
      };

    default:
      return state;
  }
};

export const getSurveys = state => state.surveys.entities;
export const getLoading = state => state.surveys.loading;
