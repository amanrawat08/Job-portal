import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get("http://localhost:3000/api/jobs", {
            withCredentials: true
        })
        return res.data.jobs;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch jobs");
    }
})


//fetch job by id
export const fetchJobById = createAsyncThunk("job/FetchJobsById", async (id,{  rejectWithValue }) => {
    try {
    //    console.log(id);
        
        const res = await axios.get(`http://localhost:3000/api/jobs/fetchJob/${id}`);
        
        
        return res.data.job;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch jobs");
    }
})

const JobSlice = createSlice({
    name: "Jobs",
    initialState: {
        job: [],
        jobDetails: null,
        loading: false
    },
    reducers: {
        clearJobs: (state) => {
            state.job = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true;
        }).addCase(fetchJobs.fulfilled, (state, action) => {
            state.loading = false;
            state.job = action.payload;
        }).addCase(fetchJobs.rejected, (state) => {
            state.loading = true;
        })
            /*fetch jobs by id */
            .addCase(fetchJobById.pending, (state) => {
                state.loading = true;
            }).addCase(fetchJobById.fulfilled, (state, action) => {
                state.loading = false;
                state.jobDetails = action.payload;
            }).addCase(fetchJobById.rejected, (state) => {
                state.loading = true;
            })
    }

})


export const {clearJobs} = JobSlice.actions;
export default JobSlice.reducer;