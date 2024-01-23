import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/Counter/counterSlice';
import counterXReducer from '../features/CounterX/counterXSlice';
import postReducer from '../features/Posts/postSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterX: counterXReducer,
    posts: postReducer,
  }
});

export default store;