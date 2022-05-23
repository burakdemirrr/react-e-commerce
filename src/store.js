

import cartReducer from './features/CartSlice';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    tark: cartReducer,
  },
})


export default store;