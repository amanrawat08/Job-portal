import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null, 
    },
    reducers:{
        setUserDetails:(state,action)=>{
            state.user = action.payload
        },
        setLogin:(state,action)=>{
            
        }
    }
    
})


export const {setUserDetails,setLogin} = userSlice.actions;
export default userSlice.reducer;