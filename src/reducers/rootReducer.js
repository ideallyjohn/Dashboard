// reducers/index.js
import { combineReducers } from 'redux';
import dashboardReducer from '../store/reducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

console.log('rootReducer:', rootReducer);

export default rootReducer;
