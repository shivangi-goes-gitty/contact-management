import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  // Add other reducers here if needed
});

// Infer the RootState type from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
