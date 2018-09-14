import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, body, dateSent, yes, no }) => (
  <div className="card darken-1">
    <div className="card-content">
      <span className="card-title">{title}</span>
      <p>{body}</p>
      <p>Send On: {new Date(dateSent).toLocaleDateString()}</p>
    </div>
    <div className="card-action">
      <a href="#">{yes}</a>
      <a href="#">{no}</a>
    </div>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dateSent: PropTypes.string.isRequired,
  yes: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired
};

export default Item;
