import { put, takeLatest, } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_CALC" actions
function* getCalc() {
  try {
    //get all active items from item table
    const response =  yield axios.get( '/api/calc');
    // store these items in all active reducer
    console.log('back from server with ', response.data)
    yield put({ type: 'SET_CALCULATIONS', payload: response.data });
  } catch (error) {
      console.log('Error getting past calculations:', error);
  }
}

//worker saga will fire on "NEW_CALC" actions
function* newCalc(action){
    try {
        //run the delete request to permanently remove item from item table
        yield axios.post('/api/calc'+ action.payload);
        //run the get active worker saga above to get the updated changes
        yield put({type: 'GET_CALC'})
    } catch (error){
        console.log('problem posting new calculation')
    }
}

function* itemSaga() {
    yield takeLatest('GET_CALC', getCalc);
    yield takeLatest('NEW_CALC', newCalc);
  }
  
  export default itemSaga;