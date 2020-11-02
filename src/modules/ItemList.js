import React, { useEffect } from 'react';
import {ListItem, List, ListItemText, Paper,} from '@material-ui/core';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'

function ItemList() {
  const history = useSelector(state => state.calculations);
  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
        dispatch({type: 'GET_CALC'});
    }, 1000);
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
