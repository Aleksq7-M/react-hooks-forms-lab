import React from "react";
import {v4 as uuid} from 'uuid';

function ItemForm({itemName, itemCategory, onItemDataChange, onItemFormSubmit}) {
  

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="itemName" 
          value={itemName}
          onChange={onItemDataChange}
        />
      </label>

      <label>
        Category:
        <select name="itemCategory" value={itemCategory} onChange={onItemDataChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
