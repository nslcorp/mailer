import axios from 'axios';
import { FETCH_USER } from '../../auth/types';
import * as types from './types';

export const doSubmitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const doFetchSurveys = values => async dispatch => {
  dispatch({ type: types.FETCH_SURVEYS_REQUEST });
  const res = await axios.get('/api/surveys', values);
  dispatch({ type: types.FETCH_SURVEYS_SUCCESS, payload: res.data });
};
