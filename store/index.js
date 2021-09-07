import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import board from "./boards/reducer";
import user from "./users/reducer";

const combine = combineReducers({
      board,
      user
})
const store = createStore(combine, applyMiddleware(thunk))

export default store