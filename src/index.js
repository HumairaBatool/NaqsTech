import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MenuBar from './Components/MenuBar';
import Home from "./Components/Home";
import AboutUs from "./Components/About-Us";
import ContactUs from "./Components/Contact-Us";
import Blog from './Components/Blog';
import GraphicDesign from './Components/Graphic-Design';
import ECommerce from './Components/E-Commerce';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  
  <MenuBar />
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/graphicdesign" element={<GraphicDesign />} />
    <Route path="/ecommerce" element={<ECommerce />} />

  </Routes>
</Router>,



);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
