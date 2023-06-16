const redux =require("redux");

const combineReducers = redux.combineReducers;
const createStore=redux.createStore;

const initialState={
    cakes:10,
    cans:20
}


//? 1. making actions for cake and can seperately
const orderCake=(total)=>{
    return {
        type:"CAKE_ORDER",
        data:total,
    }
}
const orderCan=(total)=>{
    return {
        type:"CAN_ORDER",
        data:total,
    }
}


//? 2. creating reducers for cake and can 
const cakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case "CAKE_ORDER":
            return {...state,cakes:state.cakes-action.data}
        default:
            return state
    }
}
const canReducer = (state=initialState,action)=>{
    switch(action.type){
        case "CAN_ORDER":
            return {...state,cans:state.cans-action.data}
        default:
            return state
    }
}




//? 3. Combining all reducers into one reducer
const rootReducer=combineReducers({
    "CAKE":cakeReducer,
    "CAN":canReducer,
})

//? 4. Remember in above case both will recieve actions using dispatch but only one will make certain action accordingly

//? 5. creating store using one resucer which is combined of two reducer
const store=createStore(rootReducer);



console.log("Current State is:",store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("Updated State is:",store.getState());
})



//? 6. Note: If the action.type is same then it will do the same task twice 
store.dispatch(orderCake(2));
store.dispatch(orderCan(2));

unsubscribe()


