import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './list';

class Surveys extends Component {
  render() {
    return (
      <div>
        <List />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Surveys;
