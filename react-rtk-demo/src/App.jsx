import { useState } from 'react';
import CakeView from './features/cake/CakeView';
import CanView from './features/can/CanView';
import UserView from './features/user/UserView';

import './App.css'

function App() {
  return (
    <div className='App'>
        <CakeView/>
        <CanView/>
        <UserView/>
    </div>
  )
}

export default App
