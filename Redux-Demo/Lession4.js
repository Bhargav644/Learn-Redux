const redux=require("redux")

//? 1. Requiring the middleware 
const reduxLogger=require("redux-logger");

//? 2. Functionality for applying middleware
const applyMiddleware=redux.applyMiddleware;
const createStore=redux.createStore;

//? 3. creating instance of logger
const logger=reduxLogger.createLogger();


const reducer=(state,action)=>{
    return state;
}
//? 4. Applying the middleware 
const store=createStore(reducer,applyMiddleware(logger));
console.log(store.getState());

//? it will log after every dispatch call about prev_State ,action, next_state (updated state)