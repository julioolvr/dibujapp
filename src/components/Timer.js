import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import g from "glamorous";

import { startTimer, stopTimer } from "../ducks/timer";

const TimerContainer = g.div({
  textAlign: "center"
});

const TimerValue = g.div({
  fontSize: "2.3em",
  color: "#e24e42"
});

const TimerButton = g.button({
  backgroundColor: "#eee",
  border: "1px solid #008f95",
  color: "#008f95",
  fontSize: "0.6em",
  padding: "1em 2em",
  outline: "none",
  cursor: "pointer",
  width: "10em"
});

function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;

  return `${minutes}${secondsLeft % 2 === 0
    ? ":"
    : " "}${secondsLeft.toString().padStart(2, "0")}`;
}

function Timer({ elapsedSeconds, limit, running, onStart, onStop }) {
  return (
    <TimerContainer>
      <TimerValue>{formatSeconds(limit - elapsedSeconds)}</TimerValue>
      {running ? (
        <TimerButton onClick={onStop}>Stop</TimerButton>
      ) : (
        <TimerButton onClick={onStart}>Start</TimerButton>
      )}
    </TimerContainer>
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
