import axios from 'axios';
import * as types from './types';

export const doFetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const doHandleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: types.FETCH_USER, payload: res.data });
};
