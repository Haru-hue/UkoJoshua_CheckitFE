import { configureStore } from "@reduxjs/toolkit";
import capsulesReducer from './features/capsuleSlice'
  
export const store = configureStore({
    reducer: {
        capsules: capsulesReducer
    }
})