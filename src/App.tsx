import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { useEffect, useLayoutEffect } from "react";
import {addToCategories,addToProducts} from "./store/features/products/products"
import { useDispatch } from "react-redux";


function App() {
  const dispatch=useDispatch();
 
  useLayoutEffect(()=>{
    
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>{
      
      dispatch(addToProducts(JSON.parse(data)))
      
    })
   

    fetch('https://dummyjson.com/products/categories')
    .then(res2 => res2.json())
    .then(data2=>{ console.log(data2)
      dispatch(addToCategories(data2))});
  });
  
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
