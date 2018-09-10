import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Options from './options';

const Header = ({ auth }) => {
  const homeLink = auth ? '/surveys' : '/';
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={homeLink} className="brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Options auth={auth} c />
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
