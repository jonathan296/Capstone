import poster from '../assets/mummyposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Mummy(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/mary59_gmx_903&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: The Mummy (1932)</h1>
              <div className='description'>
                <p>
                A team of British archaeologists led by Sir Joseph Whemple (Arthur Byron) discover the mummified remains of the ancient Egyptian prince Imhotep (Boris Karloff), along with the legendary scroll of Thoth. When one of the archaeologists recites the scroll aloud, Imhotep returns to life, but escapes. Several years later, Imhotep has taken on the guise of a wealthy man, as he searches Egypt for his lost love, who he believes has been reincarnated as the lovely Helen Grosvenor (Zita Johann).
                </p>
                <h2>Release date: December 22, 1932</h2>
                <h2>Director: Karl Freund</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}