// The changes for middleware purpose will be done inside sotre which is located inside app folder but still for understating purpose we will do it here :

const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger=require("redux-logger");
const canReducer=require("./features/can/canSlice");

const logger=reduxLogger.createLogger();

const store=configureStore({
    reducer:{
        can:canReducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

module.exports = store;