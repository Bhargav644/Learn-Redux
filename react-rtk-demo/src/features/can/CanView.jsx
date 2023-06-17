import React from 'react';
import { useSelector } from 'react-redux';

function CanView() {
  const numOfCans=useSelector((state)=> state.can.numOfCans);
  return (
    <div>
        <h2>Number of cans - {numOfCans}</h2>
        <button>Order Can</button>
        <button>Restock Can</button>
    </div>
  )
}

export default CanView