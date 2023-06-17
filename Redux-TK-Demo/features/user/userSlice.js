const createSlice=require("@reduxjs/toolkit").createSlice;
const createAsyncThunk=require("@reduxjs/toolkit").createAsyncThunk;
const axios=require("axios");


const initialState={
    loading:true,
    users:[],
    error:'',
}


const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users").then(response=> response.data.map(user=>user.id));
});



const userSlice=createSlice({
     name:"user",
     initialState,
     extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=true;
            state.users=action.payload;
            state.error='';
        })
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message;
        })
     }
})

module.exports=userSlice.reducer;
module.exports.fetchUsers=fetchUsers;