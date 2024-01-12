import React from "react";
import  { useState } from 'react';
import Testimonials from './components/Testimonials';
import reviews from './data';
import './App.css';

const App = () => {
  const [index,setindex] = useState(0);
  return (
    <div>
    <div className="heading">
    <h1>OUR TESTIMONIALS</h1>
    </div>
      <Testimonials data ={reviews[index]} index={index} setindex={setindex}></Testimonials>
    </div>
  );
};

export default App;
