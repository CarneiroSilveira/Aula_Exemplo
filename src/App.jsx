import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route  path='/' Component={ Home } />
      <Route path='/about' Component={ About } />
    </Routes>
    <Footer/>
    </>
  )
}

export default App