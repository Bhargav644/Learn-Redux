// In This lession we will be adding 'extraReducers' functionality basically this will be done in canSlice.js

const createSlice=require("@reduxjs/toolkit").createSlice;
const cakeActions=reqquire("./features/cake/cakeSlice").cakeActions;

const initialState={
    numOfCans:10,
}

const canSlice1 = createSlice({
    name:'can',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCans--;
        },
        restocked:(state,action)=>{
            state.numOfCans+=action.payload;
        }
    },
    extraReducers:{
        ['cake/ordered']:(state)=>{
            state.numOfCans--;
        }
    }
})

//! OR

const canSlice2 = createSlice({
    name:'can',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfCans--;
        },
        restocked:(state,action)=>{
            state.numOfCans+=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state)=>{
            state.numOfCans--;
        })
    }
})

modeule.exports=canSlice1.reducer;
modeule.exports.canActions0=canSlice1.actions;