// import * as types from './types';
import { FETCH_USER } from '../../auth/types';
import axios from 'axios';

export const doSubmitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};
