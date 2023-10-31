import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar'
import Cards from './components/layout/Cards'
import Footer from './components/layout/components/Footer/Footer';


function App() {

  return (
    <div>
      <Navbar title="Restaurant"/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
