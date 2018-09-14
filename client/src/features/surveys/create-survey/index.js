import React, { Component } from 'react';
import CreateSurveyForm from './form/index';
import ReviewForm from './review/index';

class CreateSurvey extends Component {
  state = { showReviewForm: false };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  handleCancel = () => this.setState({ showReviewForm: false });

  render() {
    if (this.state.showReviewForm) return <ReviewForm onCancel={this.handleCancel} />;

    return (
      <div>
        <h2>CreateSurvey</h2>
        <CreateSurveyForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CreateSurvey;
