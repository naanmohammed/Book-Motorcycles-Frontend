import { createSlice } from '@reduxjs/toolkit';
import newmotorcycle from './motorcycle.service';

/* eslint-disable */
const newmotorSlice = createSlice({
  name: 'addmotor',
  initialState: {
    newmotorcycle: [],
    status: null,
  },
  extraReducers: {
    [newmotorcycle.fulfilled]: (state, action) => {
      state.newmotorcycle = [...state.newmotorcycle, action.payload];
      state.status = 'success';
    },
    [newmotorcycle.pending]: (state) => {
      state.status = 'loading';
    },
    [newmotorcycle.rejected]: (state) => {
      state.newmotorcycle = [];
      state.status = 'failed';
    },
  },
});

export default newmotorSlice.reducer;
