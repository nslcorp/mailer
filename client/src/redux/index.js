import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from '../auth/reducer';

export default combineReducers({
  auth,
  form: reduxForm
});
