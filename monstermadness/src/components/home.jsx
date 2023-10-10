import {Link} from 'react-router-dom'
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
                <Link to='/dracula'><img src={dracposter}></img></Link>
                <Link to='/mummy'><img src={mummyposter}></img></Link>
                <Link to='/invisible'><img src={invisibleposter}></img></Link>
                <Link to='/wolfman'><img src={wolfposter}></img></Link>
                <Link to='/phantom'><img src={phantomposter}></img></Link>
                <Link to='/creature'><img src={creatureposter}></img></Link>
                <Link to='/bride'><img src={brideposter}></img></Link>
            </div>
        </div>
        
    )
    
}