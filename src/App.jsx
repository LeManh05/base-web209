import React from 'react';
import './App.css'
import WeddingList from './pages/weddinglist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeddingCardDetail from './pages/weddingCardDetail';
import WeddingCardFavorite from './pages/weddingCardFavorite';
import WeddingCart from './pages/weddingCart'
import ContactPage from './pages/contactPages';
function App() {
  return ( 
      <div>
       <Routes>
        <Route path="/" element={<WeddingList />} />
        <Route path="/products/:id" element={<WeddingCardDetail/>} />
        <Route path="/favorites" element={<WeddingCardFavorite/>} />
        <Route path="/cart" element={<WeddingCart/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      </div>
  )
      
}

export default App
