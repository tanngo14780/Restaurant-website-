import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS, SET_USER_ID } from "../types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return { order: null };
    case FETCH_ORDERS:
      return { orders: action.payload };
    case SET_USER_ID:
      return {
        ...state,
        user_id: action.payload,
      }
    default:
      return state;
  }
};
export { orderReducer };