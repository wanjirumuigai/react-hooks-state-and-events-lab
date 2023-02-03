import React, {useState} from "react";





function Item({ name, category }) {
  const [classname, updateClass] = useState(false)

  const listItemClass = classname ? "in-cart": ""
  function addItem() {
    updateClass(current => !current)
    
  }
  console.log(classname)
  return (
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{classname ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
