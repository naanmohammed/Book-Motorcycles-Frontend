import { createSlice } from '@reduxjs/toolkit';
import motorDetail from './detail.service';

/* eslint-disable */
const motorSlice = createSlice({
  name: 'motor',
  initialState: {
    motor: {},
    status: null,
  },
  extraReducers: {
    [motorDetail.fulfilled]: (state, { payload }) => {
      state.motor = payload;
      state.status = 'success';
    },
    [motorDetail.pending]: (state) => {
      state.status = 'loading';
    },
    [motorDetail.rejected]: (state) => {
      state.motor = {};
      state.status = 'failed';
    },
  },
});

export default motorSlice.reducer;
