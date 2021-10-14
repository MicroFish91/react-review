import * as Effects from "redux-saga/effects";
import userSagas from "./User/userSagas";

// watcher saga => actions => worker saga
function* rootSaga() {
  yield Effects.all([call(userSagas)]);
}

export default rootSaga;
