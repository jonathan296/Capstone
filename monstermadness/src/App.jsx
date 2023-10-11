import './App.css'
import logo from './assets/monsterlogo.png';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/home'
import Frankenstein from './components/frankenstein';
import Dracula from './components/dracula';
import Mummy from './components/mummy';
import Invisble from './components/Invisibleman';
import Wolf from './components/wolfman';
import Phantom from './components/phantom';
import Creature from './components/creature';
import Bride from './components/bride';

function App() {  
  return (
    <>
      <div>
        <div className='navBar'>
            <Link to='/'><img src={logo} ></img></Link>
        </div>
        
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/frankenstein' element={<Frankenstein/>} />
            <Route path='/dracula' element={<Dracula/>} />
            <Route path='/mummy' element={<Mummy/>} />
            <Route path='/invisible' element={<Invisble/>} />
            <Route path='/wolfman' element={<Wolf/>} />
            <Route path='/phantom' element={<Phantom/>} />
            <Route path='/creature' element={<Creature/>} />
            <Route path='/bride' element={<Bride/>} />
          </Routes>
        </div>
        <div className='navBar' style={{marginTop: '70px'}}>
            
        </div>
       
      </div>
    </>
  )
}

export default App
