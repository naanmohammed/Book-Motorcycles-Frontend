// motorcyclesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMotorcycles = createAsyncThunk(
  'motorcycles/getMotorcycles',
  async () => {
    const response = await axios.get('/api/motorcycles');
    return response.data;
  }
);

export const addMotorcycle = createAsyncThunk(
  'motorcycles/addMotorcycle',
  async (motorcycleData) => {
    const response = await axios.post('/api/motorcycles', motorcycleData);
    return response.data;
  }
);

export const deleteMotorcycle = createAsyncThunk(
  'motorcycles/deleteMotorcycle',
  async (id) => {
    await axios.delete(`/api/motorcycles/${id}`);
    return id;
  }
);

const motorcyclesSlice = createSlice({
  name: 'motorcycles',
  initialState: {
    motorcycles: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [getMotorcycles.pending]: (state) => {
      state.status = 'loading';
    },
    [getMotorcycles.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.motorcycles = action.payload;
    },
    [addMotorcycle.fulfilled]: (state, action) => {
      state.motorcycles.push(action.payload);
    },
    [deleteMotorcycle.fulfilled]: (state, action) => {
      state.motorcycles = state.motorcycles.filter(
        (motorcycle) => motorcycle.id !== action.payload
      );
    }
  }
});

export default motorcyclesSlice.reducer;
