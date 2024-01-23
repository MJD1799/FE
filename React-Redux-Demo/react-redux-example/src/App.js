import { connect, useSelector, useDispatch } from 'react-redux';

import { incrementCounterAction, incrementCounterAction2, fetchPosts } from './redux/counter/counter.actions';

import './App.css';
import { useEffect } from 'react';

function App({ count1, count2, posts, onCount1Click, onCount2Click, fetchPostsAction }) {

  useEffect(() => {
    // fetchPostsAction();
    dispatch(fetchPosts());
  }, [fetchPostsAction]);

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  console.log('state:', state, dispatch);
  return (
    <div className="App">
      <div>
        {/*<button onClick={onCount1Click}>Counter1</button>
        <span>{count1}</span>*/}
        <button onClick={() => {
          dispatch(incrementCounterAction());
        }}>Counter1</button>
        <span>{state.count.count}</span>
      </div>
      <div>
        {/*<button onClick={onCount2Click}>Counter2</button>
        <span>{count2}</span>*/}
        <button onClick={() => {
          dispatch(incrementCounterAction2());
        }}>Counter2</button>
        <span>{state.count2.count2}</span>
      </div>
      {
        state.count2.posts &&
        <div>
          {
            state.count2.posts.map(({ id, title }) => (<h3 key={id}>{title}</h3>))
          }
        </div>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count1: state.count.count,
    count2: state.count2.count2,
    posts: state.count2.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCount1Click: () => {
      dispatch(incrementCounterAction());
    },
    onCount2Click: () => {
      dispatch(incrementCounterAction2());
    },
    fetchPostsAction: () => {
      dispatch(fetchPosts());
    },
    dispatch
  }
};

export default App;
//connect(mapStateToProps, mapDispatchToProps)(App);
