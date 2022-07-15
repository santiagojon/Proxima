import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import systemReducer from './system';
import allSystemsReducer from './allSystems';
import planetReducer from './planets';
import planetSearchReducer from './planetSearchBar';

const reducer = combineReducers({
  singleSystem: systemReducer,
  allSystems: allSystemsReducer,
  allPlanets: planetReducer,
  planetSearch: planetSearchReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
