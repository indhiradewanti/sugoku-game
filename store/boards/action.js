import axios from "axios";
import actionType from "./actionType";

export const isLoading = (isLoad) => {
  return {
    type: actionType.IS_LOADING,
    payload: isLoad,
  };
}

export const update = (answer) => {
  return {
    type: actionType.UPDATED_BOARD,
    payload: answer,
  };
};

export const fetchData = (board) => {
  return {
    type: actionType.FETCH_ALL,
    payload: board,
  };
};

export const fetchBoard = (difficulty) => {
  return (dispatch) => {
    dispatch(isLoading(true))
    axios
      .get(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      .then((res) => {
        dispatch(fetchData(res.data.board));
        dispatch(update(res.data.board));
      })
      .catch((err) => alert(err))
      .finally(() => dispatch(isLoading(false)))
  };
};

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? "" : "%2C"}`, "");

const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
    .join("&");

export const checkValidate = (board) => {
  return {
    type: actionType.CHECK_VALIDATE,
    payload: board,
  };
};

export const validate = (inputData) => {
  return (dispatch) => {
    const data = { board: inputData };
    axios
      .post("https://sugoku.herokuapp.com/validate", encodeParams(data))
      .then(({ data }) => dispatch(checkValidate(data.status)))
      .catch((err) => alert(err))
  };
};

export const solve = (board) => {
  return {
    type: actionType.SOLVED_BOARD,
    payload: board,
  };
};

export const solved = (board) => {
  const data = { board };
  return (dispatch) => {
    axios
      .post("https://sugoku.herokuapp.com/solve", encodeParams(data), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then(({ data }) => {
        dispatch(checkValidate(data.status));
        dispatch(solve(data.solution));
        dispatch(update(data.solution))
      })
      .catch((err) => alert(err))
  };
};