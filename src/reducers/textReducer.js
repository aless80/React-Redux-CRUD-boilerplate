// default reducer: edit the default property of the Redux state
import { FETCH_DATA } from "../actions/types";

const initialState = {
  text: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};
