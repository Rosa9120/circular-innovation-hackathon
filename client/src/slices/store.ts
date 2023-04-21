import { configureStore } from '@reduxjs/toolkit';
import gemelosReducer from './gemelosSlice';
import noGemelosReducer from './noGemelosSlice';

export const store = configureStore({
  reducer: {
    gemelos: gemelosReducer,
    noGemelos: noGemelosReducer,
  },
});
