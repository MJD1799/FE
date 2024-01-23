import axios from 'axios';

import { ACTION_TYPES } from './counter.actionTypes';

export const incrementCounterAction = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  }
}

export const incrementCounterAction2 = () => {
  return {
    type: ACTION_TYPES.INCREMENT2,
  }
}


export const decrementCounterAction = () => {
  return {
    type: ACTION_TYPES.DECREMENT,
  }
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log('posts:', posts.data);
    dispatch({ type: ACTION_TYPES.ASYNC_ACTION, payload: posts.data });
  }
}