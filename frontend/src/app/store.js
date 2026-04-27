import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../feature/jobs/jobSlice'

export const store = configureStore({
    reducer:{
        jobs:jobsReducer,
    }
})