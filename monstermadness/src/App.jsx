import './App.css'
import logo from './assets/monsterlogo.png';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/home'
import Frankenstein from './components/frankenstein';


function App() {  
  return (
    <>
      <div>
        <div className='navBar'>
            <img src={logo} ></img>
        </div>
        
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/frankenstein' element={<Frankenstein/>} />
          </Routes>
        </div>
       
      </div>
    </>
  )
}

export default App
