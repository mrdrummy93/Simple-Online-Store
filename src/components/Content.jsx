import React from "react";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
import { Route, Routes } from 'react-router-dom';
import GoodsList from "./GoodsList";

const Content = () => {
  return (
    <>
      <h1 style={{
        paddingBottom: '70px',
        marginTop: '40px',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '42px',
        lineHeight: '160%'
      }}>
        Category name
      </h1>
        <Routes>
          <Route path='/list' element={<GoodsList />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/cart'  element={<CartPage />} />
        </Routes>
    </>
  )
}

export default Content;