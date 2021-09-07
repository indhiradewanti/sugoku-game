import actionType from "./actionType";

export const username = (user) => {
  return {
    type: actionType.GET_USERNAME,
    payload: user,
  };
}