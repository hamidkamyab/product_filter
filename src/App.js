import * as Vsc from "react-icons/vsc";
import Tabs from "./Tabs";
import Products from "./Products";
import data from './data'
import { useState } from "react";

const allCategories = ['همه',...new Set(data.map((item)=>item.category))]

function App() {
  const [Categories,setCategories] = useState(allCategories);
  const [ProductsList,setProductsList] = useState(data);

  const filterProduct = (cat)=>{
    if(cat !== 'همه'){
      const filterProductList = data.filter((item)=>{
        return item.category == cat;
      })
      setProductsList(filterProductList); 
    }else{
      setProductsList(data); 
    }
    
  }

  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="main container py-5 d-flex flex-column align-items-center gap-3">
          <h4 className="title position-relative m-0 p-0 pb-2">محصولات ما</h4>
          <Tabs categories={Categories} filterProduct={filterProduct} />
          <Products products={ProductsList} />
      </div>

      <div className="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
