import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { doFetchSurveys } from '../actions';
import * as selectors from '../reducer';
import Item from './item';

class List extends Component {
  componentDidMount() {
    this.props.doFetchSurveys();
  }
  render() {
    if (this.props.loading) return <h3>Loading...</h3>;

    return (
      <div>
        {this.props.surveys.reverse().map(survey => (
          <Item key={survey._id} {...survey} />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  doFetchSurveys: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loading: selectors.getLoading(state),
  surveys: selectors.getSurveys(state)
});

export default connect(
  mapStateToProps,
  { doFetchSurveys }
)(List);
