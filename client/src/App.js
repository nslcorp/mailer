import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './features/header';
import Landing from './features/landing';
import { fetchUser } from './auth/actions';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
