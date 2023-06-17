const cakeActions = require("../cake/cakeSlice").cakeActions;
const createSlice=require("@reduxjs/toolkit").createSlice;

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
        builder.addCase(cakeActions.ordered,(state)=>{
            state.numOfCans--;
        })
    }
});


module.exports=canSlice.reducer;
module.exports.canActions=canSlice.actions;