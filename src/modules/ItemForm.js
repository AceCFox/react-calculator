import React, {useState} from 'react';
import {TextField, Button, Grid, Paper, Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';

function ItemForm() {
    const [input, setInput] = useState({});
    const [open, setOpen] = useState(false);  
    const dispatch = useDispatch();
    const { create, all } = require('mathjs')
    const math = create(all)
    const limitedEvaluate = math.evaluate
    
    math.import({
      import: function () { throw new Error('Function import is disabled') },
      createUnit: function () { throw new Error('Function createUnit is disabled') },
      evaluate: function () { throw new Error('Function evaluate is disabled') },
      parse: function () { throw new Error('Function parse is disabled') },
      simplify: function () { throw new Error('Function simplify is disabled') },
      derivative: function () { throw new Error('Function derivative is disabled') }
    }, { override: true })
    
    const handleInputChange = (e) => setInput({
        ...input, 
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleAdd =() =>{
        //setOpen(true);
        const equation = input.newItem
       try  {
          const result = limitedEvaluate(equation)
          console.log(equation);
          const calculation = equation + " = " + result;
          const postObject = {calculation: calculation};
          dispatch({type: "NEW_CALC", payload: postObject})
          setInput({
              ...input, 
              newItem: ''
          })
      } catch(err) {
        alert('oops! please input a valid equation')
        console.log(err);
      }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
      
  return (
    <div style = {{bacgroundColor:'white'}}>
        <Paper elevation = {3}>
            <Grid container direction = 'row'>
                <TextField 
                    style = {{flexGrow: 1}} 
                    label = "New Calculation" 
                    variant='filled' 
                    name="newItem"
                    onChange={handleInputChange} 
                    value = {input.newItem || '' }
                    inputProps={{ maxLength: 50}}
                />
                <Button variant = 'contained' color = 'primary' onClick = {handleAdd}>=</Button>    
            </Grid>
        </Paper>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='item added!'
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        />
    </div>
  );
}

export default ItemForm;
