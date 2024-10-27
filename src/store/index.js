import { configureStore } from "@reduxjs/toolkit";
import capsulesReducer from './features/capsuleSlice'
import sidebarReducer from './features/sidebarSlice'
  
export const store = configureStore({
    reducer: {
        capsules: capsulesReducer,
        sidebar: sidebarReducer
    }
})