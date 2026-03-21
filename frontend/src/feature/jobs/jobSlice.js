import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {jobs as mockJobs} from "../../data/Jobs.js"
/*
  Async thunk
  Later we will replace mockJobs with API call
*/

export const fetchJobs = createAsyncThunk('/jobs/fetchJobs', async(_, thunkAPI)=>{
    try{
        // future: const res = await axios.get("/api/jobs")
        return mockJobs;
    }catch{
        return thunkAPI.rejectWithValue("Failed to fetch jobs");
    }
})

const jobsSlice = createSlice({
    name:"jobs",
    initialState:{
        list:[],
        selectedJobs:null,
        loading:false,
        error:null
    },
    reducers:{
        selectedJobs:(state, action)=>{
            state.selectedJobs = action.payload
        },
        clearSelectedJobs:(state)=>{
            state.selectedJobs = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchJobs.pending,(state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobs.fulfilled, (state,action)=>{
            state.loading = false;
            state.list = action.payload;
        }).addCase(fetchJobs.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const {selectedJobs , clearSelectedJobs} = jobsSlice ;
export default jobsSlice.reducer;