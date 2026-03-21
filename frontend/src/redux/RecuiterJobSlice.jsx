import { createSlice } from "@reduxjs/toolkit";

const RecuiterJobSlice = createSlice({
    name:"RecuiterJobs",
    initialState:{
        jobs : null,
        editJob:null,
        isEdit: false
    },
    reducers:{
        setRecuiterJobs:(state,action)=>{
            state.jobs = action.payload;
        },
        setEditJobDetails:(state,action)=>{
            state.editJob = action.payload;
        },
         
    }
});


export const {setRecuiterJobs, setEditJobDetails,setIsEdit} = RecuiterJobSlice.actions;
export default RecuiterJobSlice.reducer;