import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../utils/comman";

export const fetchingCateg = createAsyncThunk("fetch/categ", async (_,{ rejectWithValue  }) => {
    try {
        const res = await axios.get(`${BACKEND_URL}/api/category`,{
            withCredentials:true
        });
         
        return res.data.categ;
    } catch (error) {
        return rejectWithValue (error.response.data)
    }
})

const CategorySlice = createSlice({
    name: "categories",
    initialState: {
        categ: [],
        loading: false,
        error:false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchingCateg.fulfilled, (state, action) => {
            state.categ = action.payload;
        }).addCase(fetchingCateg.pending, (state) => {
            state.loading = true;
        }).addCase(fetchingCateg.rejected, (state, action) => {
            state.loading = false; 
            state.error = true; 
        });
    }
})

export default CategorySlice.reducer;
