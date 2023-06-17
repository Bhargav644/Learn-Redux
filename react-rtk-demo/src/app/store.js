
import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from "../features/cake/cakeSlice";
import canReducer from "../features/can/canSlice";
import userReducer from "../features/user/userSlice";


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        can:canReducer,
        user:userReducer,
    }
})

export default store;