import poster from '../assets/invisibleposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Invisble(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/the.invisible.man.1933.720p.bluray.x264-hd4u&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: The Invisible Man (1932)</h1>
              <div className='description'>
                <p>
                While researching a new drug, Dr. Jack Griffin (Claude Rains) stumbles on a potion that can make him invisible. When he reveals his new ability to his old mentor (Henry Travers) and his fiancée (Gloria Stuart), it's clear that a side effect of the potion is insanity. Jack goes on a violent rampage, and the police struggle to hunt him down, unable to see their target, while his mentor and his former partner (William Harrigan) desperately try to devise a plan to capture him.
                </p>
                <h2>Release date: November 13, 19331</h2>
                <h2>Director: James Whale</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}