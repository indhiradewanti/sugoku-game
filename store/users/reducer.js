import actionType from "./actionType";

let initialState = {
  user: "",
};

export default function reducer(state = initialState, action) {
  console.log("masuk", state, action);
  switch (action.type) {
    case actionType.GET_USERNAME:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
