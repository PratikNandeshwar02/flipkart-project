import { Route, Routes } from "react-router-dom";


import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/filter/Product";
import Cart from "./components/cart/Cart";
import { Box } from "@mui/material";
import DataProvider from "./dataProvider/DataProvider";

function App() {
  return (
    <DataProvider>
      <div style={{background: '#f2f2f2'}}>
        Hii, let' build the flipkart clone 
        <Header/>
        <Box style={{marginTop: 30}}></Box>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
