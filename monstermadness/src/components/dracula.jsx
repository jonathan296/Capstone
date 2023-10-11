import poster from '../assets/draculaposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Dracula(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/dracula-1931_202211&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: Dracula (1931)</h1>
              <div className='description'>
                <p>
                The dashing, mysterious Count Dracula (Bela Lugosi), after hypnotizing a British soldier, Renfield (Dwight Frye), into his mindless slave, travels to London and takes up residence in an old castle. Soon Dracula begins to wreak havoc, sucking the blood of young women and turning them into vampires. When he sets his sights on Mina (Helen Chandler), the daughter of a prominent doctor, vampire-hunter Van Helsing (Edward Van Sloan) is enlisted to put a stop to the count's never-ending bloodlust.
                </p>
                <h2>Release date: February 14, 1931</h2>
                <h2>Director: Tod Browning, Karl Freund</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}