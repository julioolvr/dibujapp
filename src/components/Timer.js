import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { startTimer, stopTimer } from "../ducks/timer";

function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;

  return `${minutes}:${secondsLeft.toString().padStart(2, "0")}`;
}

function Timer({ elapsedSeconds, limit, running, onStart, onStop }) {
  return (
    <div>
      {formatSeconds(limit - elapsedSeconds)}
      {running ? (
        <button onClick={onStop}>Stop</button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}
    </div>
  );
}

Timer.propTypes = {
  elapsedSeconds: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    limit: state.timer.limit,
    elapsedSeconds: state.timer.elapsedSeconds,
    running: state.timer.running
  };
}

const mapDispatchToProps = {
  onStart: startTimer,
  onStop: stopTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
