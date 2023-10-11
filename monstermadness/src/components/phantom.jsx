import poster from '../assets/phantomposter.jpg'
import Background from '../assets/MovieClean1.png';


export default function Phantom(){
    return(

        <div>
            <div className='movieScreen' style={{backgroundImage: `url(${Background})`,backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
          <div className='vidPlayer'>
            <iframe src="https://archive.org/embed/ThePhantomOfTheOpera_364&autoplay=1" width="780" height="595" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          </div>
        </div>
        
          <div className='movieInfo'>
            <img src={poster} className='poster'></img>
            <div>
              <h1 className='nowPlaying'>Now Playing: The Phantom of the Opera (1925)</h1>
              <div className='description'>
                <p>
                In this silent horror classic, aspiring young opera singer Christine Daaé (Mary Philbin) discovers that she has a mysterious admirer intent on helping her become a lead performer. This enigmatic masked presence is Erik, also known as the Phantom (Lon Chaney), a horribly disfigured recluse who lives underneath the Paris Opera House. When the Phantom takes Christine prisoner and demands her devotion and affection, her suitor, Vicomte Raoul de Chagny (Norman Kerry), sets out to rescue her.
                </p>
                <h2>Release date: November 15, 1925</h2>
                <h2>Director: Rupert Julian</h2>
                
              </div>
            </div>
          </div>


        </div>
    )
}