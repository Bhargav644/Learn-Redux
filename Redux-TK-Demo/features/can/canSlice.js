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
    }
});


module.exports=canSlice.reducer;
module.exports.canActions=canSlice.actions;