const store=require("./app/store")
const cakeActions=require("./features/cake/cakeSlice").cakeActions;
const canActions=require("./features/can/canSlice").canActions;

console.log("Initial State:",store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("Updated State:",store.getState());
});


store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(canActions.ordered());
store.dispatch(canActions.ordered());
store.dispatch(canActions.ordered());
store.dispatch(canActions.restocked(3));








unsubscribe();