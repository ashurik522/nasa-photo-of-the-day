import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Image from "./Image";
import Info from "./Info";
import Footer from "./Footer";
import Search from "./Search";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const nasaApod =
    "https://api.nasa.gov/planetary/apod?api_key=HkGVhuP81wqfTAUDHhlbf3WEbQckfUlMo2OfHEYx";

  useEffect(() => {
    axios
      .get(`${nasaApod}${date}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [date]);

  return (
    <div className="App">
      <Header data={data} />
      <Search setDate={setDate} date={date} setData={setData} />
      <Image data={data} />
      <Info data={data} />
      <Footer />
    </div>
  );
}

export default App;
