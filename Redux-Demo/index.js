const redux = require('redux');

const { thunk } = require('redux-thunk');

const axios = require('axios');

// actionTypes
const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',

  INCREMENT2: 'INCREMENT2',
  DECREMENT2: 'DECREMENT2',

  ASYNC_ACTION: 'ASYNC_ACTION',
}

// actionCreators
const incrementCounterAction = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  }
}

const decrementCounterAction = () => {
  return {
    type: ACTION_TYPES.DECREMENT,
  }
};

const fetchPosts = () => {
  return async (dispatch) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log('posts:', posts.data);
    dispatch({ type: ACTION_TYPES.ASYNC_ACTION, payload: posts.data });
  }
}

//initial state

const INITIAL_STATE = {
  count: 0,
  count2: 0,
}

// reducer
const counterReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }

    default:
      return state;
  }
}

const counterReducer2 = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.INCREMENT2:
      return {
        ...state,
        count2: state.count2 + 2
      };
    case ACTION_TYPES.DECREMENT2:
      return {
        ...state,
        count2: state.count2 - 2,
      }

    case ACTION_TYPES.ASYNC_ACTION:
      return {
        ...state,
        posts: payload
      }

    default:
      return state;
  }
}

const rootReducer = redux.combineReducers({
  count: counterReducer,
  count2: counterReducer2
})

// store
const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
//console.log('state:', store.getState());

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());

store.dispatch(fetchPosts());

store.dispatch({ type: 'DECREMENT2' });



setTimeout(() => {
  console.log('state:', store.getState());

}, 4000);