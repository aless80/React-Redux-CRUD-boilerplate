// item reducer: edit the items and loading properties of the Redux state
import { GET_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [ ],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    /*case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    case ADD_ITEM:
      return {
      ...state,
      items: [action.payload, ...state.items]
      }*/
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}