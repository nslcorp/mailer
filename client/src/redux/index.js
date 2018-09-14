import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from '../auth/reducer';
import surveys from '../features/surveys/reducer';

export default combineReducers({
  form: reduxForm,
  auth,
  surveys
});
