import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Payments from '../../payments';

const Options = ({ auth }) => {
  if (auth === null) return null;
  else if (auth === false) {
    return (
      <li>
        <a href="/auth/google">Login With Google</a>
      </li>
    );
  }

  return (
    <Fragment>
      <li>
        <Payments />
      </li>
      <li style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>
      <li>
        <a href="/api/logout">Logout</a>
      </li>
    </Fragment>
  );
};

Options.propTypes = {
  auth: PropTypes.object
};

export default Options;
