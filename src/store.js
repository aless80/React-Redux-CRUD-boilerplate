import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';

/* Redux state has this shape:
  default: 'some string',
  data: { 
    items: [
      {__v: 0, _id: "5c6c26e2ddc3ce328d145124", date: "2019-02-19T15:55:14.083Z", name: "egg"},
      {__v: 0, _id: "5c6c26e2ddc3ce328d145124", date: "2019-02-19T15:55:14.083Z", name: "egg"}
    ]
  }
*/

const initialState = {};

const middleware = applyMiddleware(thunk, logger, ReduxPromise);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux devtools
  )
);

export default store;