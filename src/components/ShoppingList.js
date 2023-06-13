import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory ] = useState('All')

  function changeCategory(cat){
    setCategory(cat)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => changeCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => ( (item.category === selectedCategory || selectedCategory === "All") ?
          <Item key={item.id} name={item.name} category={item.category} /> : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
