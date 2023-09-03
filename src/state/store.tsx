import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/contactsIndex';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
