import React, { Component } from 'react';
import AddSurveyForm from './form';
import ReviewForm from './review-form';

class SurveyNew extends Component {
  state = { showReviewForm: false };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  handleCancel = () => this.setState({ showReviewForm: false });

  render() {
    if (this.state.showReviewForm) return <ReviewForm onCancel={this.handleCancel} />;

    return (
      <div>
        <h2>SurveyNew</h2>
        <AddSurveyForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

SurveyNew.propTypes = {};

export default SurveyNew;
