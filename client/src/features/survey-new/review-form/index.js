import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { FIELDS } from '../form';
import { doSubmitSurvey } from '../actions';

const ReviewForm = props => (
  <div>
    <h5>Please confirm your entries</h5>
    {_.map(FIELDS, ({ name, label }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{props.formValues[name]}</div>
      </div>
    ))}
    <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
      Cancel
    </button>
    <button
      className="green btn-flat right white-text"
      onClick={() => props.doSubmitSurvey(props.formValues)}
    >
      Send Survey
      <i className="material-icons right">email</i>
    </button>
  </div>
);

ReviewForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  doSubmitSurvey: PropTypes.func.isRequired,
  formValues: PropTypes.shape().isRequired
};

const mapStateToProps = state => ({
  formValues: state.form['add-survey'].values
});

export default connect(
  mapStateToProps,
  { doSubmitSurvey }
)(ReviewForm);
