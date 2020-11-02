import React from 'react';
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";


function MainList() {
  return (
    <div>
      <ItemForm/>
      <p>Previous Calculations:</p>
      <ItemList/>
    </div>
  );
}

export default MainList;
