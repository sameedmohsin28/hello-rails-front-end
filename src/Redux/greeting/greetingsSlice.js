import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const API_URL = 'http://127.0.0.1:3000/api/greetings/index';
  const response = await axios.get(API_URL);
  const response2 = response.json();
  return response2;
});

const initialGreetingState = {
  randomGreeting: '',
  isLoadingGreeing: false,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: initialGreetingState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        randomGreeting: action.payload,
      }));
  },
});

export default greetingSlice.reducer;
