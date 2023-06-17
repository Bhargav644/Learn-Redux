// Follow the files consist of users keyword 
// In these file we will learn about aynchronous behaviour in redux

//1. `user` in features
//2. `store` in app

const store=require("./app/store");
const fetchUsers = require("./features/user/userSlice").fetchUsers;


console.log('Initial State',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState());
});

store.dispatch(fetchUsers());