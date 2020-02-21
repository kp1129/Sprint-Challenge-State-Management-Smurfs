import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfsActions";
import './StartButton.css';

const StartButton = props => {
  const handleClick = event => {
    event.preventDefault();
    props.fetchSmurfs();
  };

  return (
    <button className="start-button" type="submit" onClick={handleClick}>
      Get Started!
    </button>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isUpdating: state.isUpdating
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(StartButton);
