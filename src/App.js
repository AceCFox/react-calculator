import React, { useEffect } from 'react';
import './App.css';
import MainList from "./modules/MainList";
import { useDispatch } from 'react-redux'
import bagel from './bagel.png'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'GET_CALC'})
  });

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <br/>
        {/* <img src = {bagel} alt = 'delicious bagel' style={{animation: `App-logo-spin 5s linear infinite`, maxWidth: '250px' }}/> */}
        <h1>
          React Calculator
        </h1>
        <MainList/>
      </header>
    </div>
  );
}

export default App;
