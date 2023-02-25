import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addToCategories,addToProducts} from "./store/features/products/products"


function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res=>dispatch(addToProducts(res.products)));
    debugger

    fetch('https://dummyjson.com/products/categories')
    .then(res2 => res2.json())
    .then(res2=>dispatch(addToCategories(res2)));
  },[])

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
