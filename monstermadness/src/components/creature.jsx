import poster from '../assets/creatureposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Creature(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/creature-from-the-black-lagoon&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: Creature from the Black Lagoon (1954)</h1>
              <div className='description'>
                <p>
                Remnants of a mysterious animal have come to light in a remote jungle, and a group of scientists intends to determine if the find is an anomaly or evidence of an undiscovered beast. To accomplish their goal, the scientists (Antonio Moreno, Richard Carlson, Richard Denning, Whit Bissell) must brave the most perilous pieces of land South America has to offer. But the terrain is nothing compared to the danger posed by an otherworldly being that endangers their work and their lives.
                </p>
                <h2> February 12, 1954</h2>
                <h2>Director: Jack Arnold</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}