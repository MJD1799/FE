import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from './features/Counter/counterSlice';
import { counterXActions } from './features/CounterX/counterXSlice';
import { fetchPosts } from './features/Posts/postSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const countX = useSelector(state => state.counterX.countX);
  const { posts, isLoading } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  return (
    <div >
      <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      <div>{count}</div>

      <button onClick={() => dispatch(counterXActions.incrementX(2))}>Increment By 2</button>
      <button onClick={() => dispatch(counterXActions.decrementX(2))}>Decrement By 2</button>
      <div>{countX}</div>

      <button onClick={() => dispatch(fetchPosts())}>Get Posts</button>
      <div>
        {isLoading && "loading..."}
        {
          !isLoading && posts.length && posts.map(({ id, title }) => <div key={id}>{title}</div>)
        }
      </div>
    </div>
  );
};

export default Counter;