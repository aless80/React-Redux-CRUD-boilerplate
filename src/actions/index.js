import axios from 'axios';
import { FETCH_DATA, GET_ITEMS, ITEMS_LOADING } from './types';

/// Add here any action function running any API calls 

// Action function for the default property of Redux state
export function textFunction() {
    let testVar = 'From actions/index.js > defaultFunction';    
    
    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: testVar
    }
}

// Action function getting data from API. Data will be stored in the items property of Redux state
export const getItems = () => dispatch => {
  // Set loading to true
  dispatch(setItemsLoading());
  // Get data from some API and dispatch it with action
  axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
}

/*
export const addItem = (item) => dispatch => {
  axios.post('/api/items', item)
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
}

export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        payload: id
    })
    )
}
*/

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}