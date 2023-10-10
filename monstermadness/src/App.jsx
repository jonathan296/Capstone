import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './assets/MovieClean1.png';
import logo from './assets/monsterlogo.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='navBar'>
            <img src={logo}></img>
        </div>
        <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/frankenstein__1931&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
