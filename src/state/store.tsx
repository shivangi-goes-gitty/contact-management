// store.tsx

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/contactsIndex'; // Correct the import path

const store = configureStore({
  reducer: rootReducer,
});

export default store;
