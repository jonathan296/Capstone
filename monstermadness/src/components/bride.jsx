import poster from '../assets/brideposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Bride(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/frankenstein-1931_202304/The+Bride+Of+Frankenstein+(1935).mp4&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: The Bride of Frankenstein (1935)</h1>
              <div className='description'>
                <p>
                After recovering from injuries sustained in the mob attack upon himself and his creation, Dr. Frankenstein (Colin Clive) falls under the control of his former mentor, Dr. Pretorius (Ernest Thesiger), who insists the now-chastened doctor resume his experiments in creating new life. Meanwhile, the Monster (Boris Karloff) remains on the run from those who wish to destroy him without understanding that his intentions are generally good despite his lack of socialization and self-control.
                </p>
                <h2>Release date:  April 22, 1935</h2>
                <h2>Director: James Whale</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}