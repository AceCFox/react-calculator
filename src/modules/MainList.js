import React from 'react';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Typography from '@material-ui/core/Typography';


function MainList() {
  return (
    <div>
      <ItemForm/>
      <br/>
      <Typography variant = 'h4'>Previous Calculations:</Typography>
      <ItemList/>
    </div>
  );
}

export default MainList;
