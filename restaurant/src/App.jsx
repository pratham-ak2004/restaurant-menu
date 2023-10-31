import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar'
import Cards from './components/layout/Cards'
import Footer from './components/layout/components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
