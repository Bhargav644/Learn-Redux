const immer=require("immer")


const obj={
    name:"Bhargav",
    address:{
        stree:"H3-Villar",
        pincode:"210420"
    }
}


console.log(obj)


//? Without immer

const obj1={
    ...obj,
    address:{
        ...obj.address,
        pincode:"175017",
    }
}

console.log(obj1);


//? With immer
const obj2=immer.produce(obj,(driftState)=>{
    driftState.address.pincode="175018"
});

console.log(obj2)