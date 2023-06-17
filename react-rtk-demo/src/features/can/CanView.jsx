import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { ordered, restocked } from './canSlice';


function CanView() {
  const numOfCans=useSelector((state)=> state.can.numOfCans);
  const dispatch=useDispatch();
  return (
    <div>
        <h2>Number of cans - {numOfCans}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Can</button>
        <button onClick={()=>dispatch(restocked(3))}>Restock Can</button>
    </div>
  )
}

export default CanView