import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const noGemelosSlice = createSlice({
  name: 'noGemelos',
  initialState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle: toggleNoGemelos } = noGemelosSlice.actions;

export default noGemelosSlice.reducer;
