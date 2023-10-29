import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar/navbar'
import Cards from './components/layout/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Cards/>
      {/* <h1>hello world</h1> */}
    </div>
  )
}

export default App
