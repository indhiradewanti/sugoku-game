import actionType from "./actionType";

let initialState = {
  board: [],
  status: "broken",
  answer: [],
  isLoading: false
};

export default function reducer(state = initialState, action) {
  console.log("masuk", state, action);
  switch (action.type) {
    case actionType.FETCH_ALL:
    case actionType.SOLVED_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case actionType.UPDATED_BOARD:
      return {
        ...state,
        answer: action.payload,
      };
    case actionType.CHECK_VALIDATE:
      return {
        ...state,
        status: action.payload,
      };
    case actionType.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
