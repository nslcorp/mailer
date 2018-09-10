import React from 'react';
import PropTypes from 'prop-types';

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
    <li>
      <a href="/api/logout">Logout</a>
    </li>
  );
};

Options.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Options;
