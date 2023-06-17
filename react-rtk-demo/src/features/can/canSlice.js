import { ordered as cakeOrdered } from "../cake/cakeSlice";
import {createSlice} from "@reduxjs/toolkit";

const initialState={
    numOfCans:13,
}

const canSlice=createSlice({
    name:'can',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCans--;
        },
        restocked:(state,action)=>{
            state.numOfCans+=action.payload;
        },
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfCans--;
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numOfCans--;
        })
    }
});


export default canSlice.reducer;
export const {ordered,restocked}=canSlice.actions;