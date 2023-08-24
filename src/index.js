import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MenuBar from './Components/MenuBar';
import Home from "./Components/Home";
import AboutUs from "./Components/About-Us";
import ContactUs from "./Components/Contact-Us";
import Blog from './Components/Blog';
import GraphicDesign from './Components/Graphic-Design';
import ECommerce from './Components/E-Commerce';
import WebDevelopment from './Components/WebDevelopment';
import SEO from './Components/SEO';
import Footer from './Components/Footer';
import TopHeader from './Components/Top-Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='w-full xs:max-w-full xs:overflow-hidden'>
  <Router>
  
  <TopHeader></TopHeader>
  <MenuBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/graphicdesign" element={<GraphicDesign />} />
    <Route path="/ecommerce" element={<ECommerce />} />
    <Route path="/webdevelopment" element={<WebDevelopment/>} />
    <Route path="/seo" element={<SEO />} />


  </Routes>
  <Footer></Footer>
</Router>


</div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
