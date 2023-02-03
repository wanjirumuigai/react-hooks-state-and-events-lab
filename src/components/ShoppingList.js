import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, updateCategory] = useState("All")
  const filterCategory = items.filter((item) => {
    if(selectedCategory === "All") {
      return true
    } else {
      return item.category === selectedCategory
    }
  })

  //items = filterCategory

  function handleFilter(e) {

// console.log(filterCategory)
updateCategory(e.target.value)

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleFilter(e)}>
          <option value="All" >Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
