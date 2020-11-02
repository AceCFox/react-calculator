import React, { useEffect } from 'react';
import {ListItem, List, ListItemText, Paper,} from '@material-ui/core';
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function ItemList() {
  const history = useSelector(state => state.calculations);
  const dispatch = useDispatch()

  //This checks for any updates from users every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
        dispatch({type: 'GET_CALC'});
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
        <Paper>
            <List dense>
                {history.map((item, index)=>
                    <ListItem key = {index}>
                        <ListItemText primary = {item.calculation}/>
                    </ListItem>
                )}
            </List>
        </Paper>
    </div>
    )
}


export default ItemList;
