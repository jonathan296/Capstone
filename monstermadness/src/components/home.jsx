import {Route, Routes, Link} from 'react-router-dom'
import frankposter from '../assets/frankposter.jpg'
import dracposter from '../assets/draculaposter.jpg'
import mummyposter from '../assets/mummyposter.jpg'
import invisibleposter from '../assets/invisibleposter.jpg'
import wolfposter from '../assets/wolfmanposter.jpg'
import phantomposter from '../assets/phantomposter.jpg'
import creatureposter from '../assets/creatureposter.jpg'
import brideposter from '../assets/brideposter.jpg'




export default function Home() {
    return(
        <div className='posterContainer'>
            <div className='homePosters'>
                <Link to='/frankenstein'><img src={frankposter}></img></Link>
                <Link><img src={dracposter}></img></Link>
                <Link><img src={mummyposter}></img></Link>
                <Link><img src={invisibleposter}></img></Link>
                <Link><img src={wolfposter}></img></Link>
                <Link><img src={phantomposter}></img></Link>
                <Link><img src={creatureposter}></img></Link>
                <Link><img src={brideposter}></img></Link>
            </div>
        </div>
        
    )
    
}