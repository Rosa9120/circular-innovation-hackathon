import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const gemelosSlice = createSlice({
  name: 'gemelos',
  initialState,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle: toggleGemelos } = gemelosSlice.actions;

export default gemelosSlice.reducer;