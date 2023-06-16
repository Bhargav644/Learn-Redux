
/**  Basic of Redux that how to create store ,action and how to dispatch certain action with subscribe and unsubscribe feature  */

const redux=require("redux");
const createStore=redux.createStore;

//?1. initial state
const initialState={
    count:10,
    cost:20
}


//?2. creating dummy action
function createOrder(){    
    const action={
        type:"ORDER",
        data:2
    }
    return action;
}


//?3. creating reducer
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "ORDER":
            return {...state,count:state.count-action.data}
        default:
            return state;
    }
}

//?4. intializing store with it's reducer
const store=createStore(reducer);



console.log("Current State is:",store.getState());



//?5. it's subscribe method this returns a function which can be used to stop itself here it is unsubscribe
const unsubscribe=store.subscribe(()=>{
    console.log("Updated State is:",store.getState());
})

//?6. dispatch used to call a certain action
store.dispatch(createOrder());


//?7. calling subscribing
unsubscribe();


