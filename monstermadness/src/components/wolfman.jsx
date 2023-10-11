import poster from '../assets/wolfmanposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Wolf(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/TWfMn1941&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: The Wolf Man (1941)</h1>
              <div className='description'>
                <p>
                When his brother dies, Larry Talbot (Lon Chaney) returns to Wales and reconciles with his father (Claude Rains). While there, he visits an antique shop and, hoping to impress Gwen (Evelyn Ankers), the attractive shopkeeper, buys a silver walking cane. That same night he kills a wolf with it, only to later learn that he actually killed a man (Bela Lugosi). A gypsy (Maria Ouspenskaya) explains that it was her son, a werewolf, that he killed, and that Larry is now one himself.
                </p>
                <h2>Release date: December 9, 1941</h2>
                <h2>Director: George Waggner</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}