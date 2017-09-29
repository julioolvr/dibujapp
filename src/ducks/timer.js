import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";

export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const TIMER_TICK = "TIMER_TICK";
export const SET_TIMER_LIMIT = "SET_TIMER_LIMIT";

export function startTimer() {
  return { type: START_TIMER };
}

export function stopTimer() {
  return { type: STOP_TIMER };
}

export function timerTick(elapsedSeconds) {
  return { type: TIMER_TICK, payload: elapsedSeconds };
}

export function setTimerLimit(limit) {
  return { type: SET_TIMER_LIMIT, payload: limit };
}

function tickEpic(action$) {
  return action$.ofType(START_TIMER).mergeMap(() => {
    const startTime = Date.now();

    return Observable.timer(0, 100)
      .map(() => timerTick(Math.floor((Date.now() - startTime) / 1000)))
      .takeUntil(action$.ofType(STOP_TIMER));
  });
}

function stopOnFinishEpic(action$, store) {
  return action$
    .ofType(TIMER_TICK)
    .filter(action => action.payload >= store.getState().timer.limit)
    .mapTo(stopTimer());
}

export const epic = combineEpics(tickEpic, stopOnFinishEpic);

const INITIAL_STATE = {
  limit: 5 * 60,
  elapsedSeconds: 0,
  running: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TIMER_LIMIT:
      return { ...state, limit: action.payload };
    case START_TIMER:
      return { ...state, running: true };
    case STOP_TIMER:
      return INITIAL_STATE;
    case TIMER_TICK:
      return { ...state, elapsedSeconds: action.payload };
    default:
      return state;
  }
}
