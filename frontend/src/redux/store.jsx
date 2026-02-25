import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import recuiterJob from "./RecuiterJobSlice";
import jobCategoryReducer from "./jobCategorySlice ";
import jobFetch from "./JobSlice";
import CategorySlice from "./CategorySlice"
const store = configureStore(
    {
        reducer: {
            CategorySlice:CategorySlice,
            jobs: jobFetch,
            user: userSlice,
            recuiterJobs: recuiterJob,
            jobCategories: jobCategoryReducer,

        }
    }
)

export default store;