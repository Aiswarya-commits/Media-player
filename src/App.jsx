import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
  <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/watch-history' element={<Watchhistory/>}/>
  </Routes>
 




      <Footer/>


    </>
  )
}

export default App
