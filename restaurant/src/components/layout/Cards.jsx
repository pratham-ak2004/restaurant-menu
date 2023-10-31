import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import items from './components/Data';
import { useState } from 'react';
import Categories from './components/categories';

const allcategories=['All',...new Set (items.map((item)=> item.category))];

function Cards() {
  const[menuItems,setMenuItems]=useState(items);
 const[categories,setCategories]=useState(allcategories);
 const filterItems=(category) =>{
  if(category ==='All'){
    return setMenuItems(items)
  }
  const newItems=items.filter((item) => item.category===category)
return setMenuItems(newItems);
}
 return (
   <div className="container py-5">
    <Categories filterItems={filterItems} categories={categories}/>
   <Menu items={menuItems}/>
   </div>
  );
}

export default Cards;