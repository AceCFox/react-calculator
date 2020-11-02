import React, {useState} from 'react';
import {TextField, DialogActions, DialogContent, Button, Grid, Paper, Dialog, IconButton} from '@material-ui/core';
import { useDispatch } from 'react-redux';

function ItemForm() {
    const [input, setInput] = useState({});
    const [open, setOpen] = useState(false);  
    const dispatch = useDispatch();
    const { create, all } = require('mathjs')
    const math = create(all)
    const limitedEvaluate = math.evaluate
    
    //The following import statements limit the scope of evaluate to make it somewhat "safer" than eval
    //as the user input and its evaluation are going directly to the server side
    math.import({
      import: function () { throw new Error('Function import is disabled') },
      createUnit: function () { throw new Error('Function createUnit is disabled') },
      evaluate: function () { throw new Error('Function evaluate is disabled') },
      parse: function () { throw new Error('Function parse is disabled') },
      simplify: function () { throw new Error('Function simplify is disabled') },
      derivative: function () { throw new Error('Function derivative is disabled') }
    }, { override: true })
    
    //standard input handler
    const handleInputChange = (e) => setInput({
        ...input, 
        [e.currentTarget.name]: e.currentTarget.value
    })

    //this function handles the actual math and dispatches the result to a saga
    const handleAdd =() =>{
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
        setOpen(true);
        console.log(err);
      }
    }

    //this function closes the error window
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      setInput({
          ...input, 
          newItem: ''
      })
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
                <Button variant = 'contained' color = 'primary' onClick = {handleAdd}><larger>=</larger></Button>    
            </Grid>
        </Paper>
        <Dialog
        open={open}
        onClose={handleClose}
        >
          <DialogContent>
            <p>
            Oops! Please input a valid equation :)
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose}>
              okay
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

export default ItemForm;
