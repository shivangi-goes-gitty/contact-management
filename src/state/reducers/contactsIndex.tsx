// reducers/index.ts
import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add other reducers here if needed
});

export default rootReducer;

