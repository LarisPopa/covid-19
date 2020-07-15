import React from "react";
import "../style/Card.css";
import CountUp from "react-countup";
import PropTypes from 'prop-types';

const Card = ({ heading1, heading2, number, lastUpdate, cardType }) => {
  return (
    <div className="card">
      <div className={cardType}></div>
      <h3>{heading1}</h3>
      <h2>
        <CountUp start={0} end={number} duration={3} separator="," />
      </h2>
      <h3>{heading2}</h3>
      <h2>{new Date(lastUpdate).toDateString()}</h2>
    </div>
  );
};

Card.propTypes = {
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  number: PropTypes.number,
  lastUpdate: PropTypes.instanceOf(Date)
};

export default Card;
