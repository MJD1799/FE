import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const INITIAL_STATE = {
  posts: [],
  isLoading: false,
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //console.log('posts:', posts.data);
  return posts.data;
})

const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => { state.isLoading = true });
    builder.addCase(fetchPosts.fulfilled, (state, action) => { state.isLoading = false; state.posts = action.payload });
    builder.addCase(fetchPosts.rejected, (state, action) => { state.isLoading = false; state.posts = [] });
  }
});

//export const postActions = postSlice.actions;

export default postSlice.reducer;




//export const fetchPosts = () => {
//  return async (dispatch) => {
//    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
//    //console.log('posts:', posts.data);
//    dispatch({ type: ACTION_TYPES.ASYNC_ACTION, payload: posts.data });
//  }
//}