import { combineEpics } from "redux-observable";

import { epic as timer } from "./ducks/timer";

export default combineEpics(timer);
