import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { doHandleToken } from '../../auth/actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="5$ for 5 credits"
          amount={500}
          token={token => this.props.doHandleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

Payments.propTypes = {
  doHandleToken: PropTypes.func.isRequired
};

const withConnect = connect(
  null,
  { doHandleToken }
);
export default withConnect(Payments);
