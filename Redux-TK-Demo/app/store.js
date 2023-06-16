const configureStore=require("@reduxjs/toolkit").configureStore;
const cakeReducer=require("../features/cake/cakeSlice");
const canReducer=require("../features/can/canSlice");


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        can:canReducer,
    }
})




module.exports=store;