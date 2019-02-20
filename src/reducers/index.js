import { combineReducers } from 'redux';
// calling the reducers for the 'default' and 'items' properties of the state
import defaultReducer from './textReducer';
import itemReducer from './itemReducer';

const rootReducers = combineReducers({
    // add reducer files references here
    text: defaultReducer,
    data: itemReducer,
});

export default rootReducers;