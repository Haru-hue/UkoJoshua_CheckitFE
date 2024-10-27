import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch data from SpaceX API
export const fetchCapsules = createAsyncThunk('capsules/fetchCapsules', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/capsules');
  return response.data;
});

const capsulesSlice = createSlice({
  name: 'capsules',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addCapsule: (state, action) => {
      state.items.push(action.payload);
    },
    updateCapsule: (state, action) => {
      const index = state.items.findIndex((capsule) => capsule.capsule_id === action.payload.capsule_id);
      if (index >= 0) state.items[index] = action.payload;
    },
    deleteCapsule: (state, action) => {
      state.items = state.items.filter((capsule) => capsule.capsule_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCapsules.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCapsules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCapsules.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addCapsule, updateCapsule, deleteCapsule } = capsulesSlice.actions;

export default capsulesSlice.reducer;