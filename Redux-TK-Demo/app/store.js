const configureStore=require("@reduxjs/toolkit").configureStore;
const cakeReducer=require("../features/cake/cakeSlice");
const canReducer=require("../features/can/canSlice");
const userReducer=require("../features/user/userSlice");


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        can:canReducer,
        user:userReducer,
    }
})


module.exports=store;