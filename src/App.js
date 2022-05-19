import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header';
import Image from './Image';
import Info from './Info';
import Footer from "./Footer";
import styled from "styled-components"



function App() {
  const [data, setData] = useState([])
  

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HkGVhuP81wqfTAUDHhlbf3WEbQckfUlMo2OfHEYx')
    .then(res=>{
      setData(res.data)
      // console.log(res.data)
    })
    .catch(err=>{console.error(err)});
  },[])
  

  return (
    <div className="App">
      <Header  data={data}/>
      <Image data={data} />
      <Info data={data} />
      <Footer />


    </div>
  );
}

export default App;
