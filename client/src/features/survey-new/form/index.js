import React from 'react';
import _ from 'lodash';
import { reduxForm, Field, clearFields } from 'redux-form';
import { Link } from 'react-router-dom';
import { validateFields } from './utils';

const renderField = ({ input, label, meta: { error, touched }, type = 'text' }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} style={{ marginBottom: '5px' }} />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);

export const FIELDS = [
  { name: 'title', label: 'Title' },
  { name: 'subject', label: 'Subject' },
  { name: 'body', label: 'Email Body' },
  { name: 'recipients', label: 'Recipient List' }
];

const AddSurveyForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {_.map(FIELDS, ({ name, label }) => (
          <Field key={name} name={name} label={label} component={renderField} />
        ))}

        <Link to="/surveys" className="red btn-flat white-text" onClick={reset}>
          Cancel
        </Link>
        <button className="teal btn-flat right" type="submit">
          Next
          <i className="material-icons">done</i>
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'add-survey',
  validate: validateFields,
  destroyOnUnmount: false
})(AddSurveyForm);
