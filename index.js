import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import About from './Pages/About';
import Header from './Pages/Header'
import Footer from './Pages/Footer';
import Productpage from './Pages/Productpage'
import Home from './Pages/Home'
import App from './App';


ReactDOM.render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/productpage/:id" element={<Productpage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
  
  document.getElementById('root')
);
