import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import {v4 as uuid} from 'uuid';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  const [itemFormData, setItemFormData] = useState({
    itemName: 'Alex is Cool',
    itemCategory: 'Produce'
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  function handleItemDataChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setItemFormData({
      ...itemFormData,
      [name]: value
      
    })
  }

  function handleItemFormSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name:itemFormData.itemName,
      category:itemFormData.itemCategory
    }
    onItemFormSubmit(newItem)
  }


  const itemsToDisplay = items
  .filter((item) => item.name.includes(search))
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        itemName={itemFormData.itemName}
        itemCategory={itemFormData.itemCategory}
        onItemDataChange={handleItemDataChange}
        onItemFormSubmit={handleItemFormSubmit}
      />
      <Filter 
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
