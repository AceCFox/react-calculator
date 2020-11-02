import React, { useEffect } from 'react';
import './App.css';
import MainList from "./modules/MainList";
import { useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'GET_CALC'})
  });

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        {/* <img src = {bagel} alt = 'delicious bagel' style={{animation: `App-logo-spin 5s linear infinite`, maxWidth: '250px' }}/> */}
        <Typography variant = "h1">
          Ace's Calculator
        </Typography>
        <MainList/>
      </header>
    </div>
  );
}

export default App;
