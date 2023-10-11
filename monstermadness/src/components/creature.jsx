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
                  This iconic horror film follows the obsessed scientist Dr. Henry Frankenstein as he attempts to 
                  create life by assembling a creature from body parts of the deceased. Aided by his loyal misshapen 
                  assistant, Fritz, Frankenstein succeeds in animating his monster, but it escapes into the countryside 
                  and begins to wreak havoc. Frankenstein searches for the elusive being and eventually must confront 
                  his tormented creation.
                </p>
                <h2>Release date: November 21, 1931</h2>
                <h2>Director: James Whale</h2>
                <h2>Writers: John L. Balderston, Mary Shelley, Peggy Webling</h2>
              </div>
            </div>
          </div>


        </div>
    )
}