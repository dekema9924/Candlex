import Footer from "./components/Footer"
import Header from "./components/Header"
import './styles/global.css'
import {Routes, Route} from 'react-router-dom'
import LandingPage from "./components/Home/LandingPage"
import Shop from "./components/Shop/Shop"


function App() {

  return (
    <>
      <Header/> 
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
