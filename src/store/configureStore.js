import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import dashboardReducer from '../store/reducers';

export function configureStore() {
  const rootReducer = combineReducers({
    dashboard: dashboardReducer,
  });

  const middlewareEnhancer = applyMiddleware(thunkMiddleware);
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, composedEnhancers);

  return store;
}
