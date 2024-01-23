import { combineReducers } from 'redux';

import { ACTION_TYPES } from './counter.actionTypes';

//initial state

const INITIAL_STATE = {
  count: 0,
  count2: 0,
}

// reducer
export const counterReducer = (state = INITIAL_STATE, action) => {
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

export const counterReducer2 = (state = INITIAL_STATE, action) => {
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

const rootReducer = combineReducers({
  count: counterReducer,
  count2: counterReducer2
});


export default rootReducer;