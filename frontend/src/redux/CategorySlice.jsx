import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchingCateg = createAsyncThunk("fetch/categ", async (_,{ rejectWithValue  }) => {
    try {
        const res = await axios.get("http://localhost:3000/api/category",{
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
            state.error = action.payload;
        });
    }
})

export default CategorySlice.reducer;