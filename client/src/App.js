import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './features/header';
import Landing from './features/landing';
import Surveys from './features/surveys';
import CreateSurvey from './features/surveys/create-survey';
import { doFetchUser } from './auth/actions';

class App extends Component {
  componentDidMount() {
    this.props.doFetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Surveys} />
          <Route path="/surveys/new" component={CreateSurvey} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { doFetchUser }
)(App);
