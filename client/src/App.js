import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './features/header';
import Landing from './features/landing';
import Dashboard from './features/dashboard';
import SurveyNew from './features/survey-new';
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
          <Route path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { doFetchUser }
)(App);
