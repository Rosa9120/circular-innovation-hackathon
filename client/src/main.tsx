import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './state/api'
import gemelosReducer from './slices/gemelosSlice'
import noGemelosReducer from './slices/noGemelosSlice'


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    gemelos: gemelosReducer,
    noGemelos: noGemelosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState> 

setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
