import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
  countX: 0,
};

const counterXSlice = createSlice({
  name: 'counterX',
  initialState: INITIAL_STATE,
  reducers: {
    incrementX: (state, action) => { state.countX += action.payload },
    decrementX: (state, action) => { state.countX -= action.payload },
  },
});

export const counterXActions = counterXSlice.actions;

export default counterXSlice.reducer;