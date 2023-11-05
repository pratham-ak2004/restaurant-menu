import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar/navbar'
import Cards from './components/layout/Cards'
import Carousal from './components/layout/components/Carousal/Carousal';
import Footer from './components/layout/components/Footer/Footer';
import Hero from './components/layout/components/Hero/Hero';
import Category from './components/layout/components/Categories/Category';

// import { useState } from "react";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import Carousal from './components/Carousal';
// import Overview from './components/Overview';
// import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      
      <Hero/>
      {/* <Overview/>
      <Carousal/> */}
      <Category/>
      
      <Cards/>

      <Footer/>
      {/* <h1>hello world</h1> */}
      {/* 
      
       */}
    </div>
  )
}

export default App
