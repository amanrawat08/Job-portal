import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchJobCategories = createAsyncThunk("jobCatgeories/fetch", async (_, { isRejectedWithValue }) => {
    try {
        const res = await axios.get("http://localhost:3000/api/jobs/jobCategories", { withCredentials: true });
       // console.log(res.data);
        
        return res.data
    } catch (error) {
        return isRejectedWithValue(error.response.data)
    }
})

const jobCategorySlice = createSlice({
    name: "JobCategory",
    initialState: {
        data: null,
        detailPage:null,
        loading: false
    },

    reducers:{
        setDetailPageJob :(state,action)=>{
            state.detailPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchJobCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchJobCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export const {setDetailPageJob} = jobCategorySlice.actions;
export default jobCategorySlice.reducer;