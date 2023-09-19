import bubbleAttack from '../bubbleAttack.png'
import chicken from '../Menu Screen.png';
import wind from '../WindWhirlTitleeyes.png';
import pill from '../pill.png'
import join from '../joinLogicJam.png';
import mypic from '../MYlogo.png'

function Games() {
    console.log('games');
    return (
      <div className='container'>
        <div className='title-container'>
          <h1 className='page-title'>Games</h1>
            <h2 className='page-title-para'>This is where my digital artwork is brought to life through functionality</h2>
        </div>
        <div className='row'>
          <div className='col'>
                    <img src={chicken} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Why Did the Chicken Cross the Universe?</h5>
                            <p className="card-text">This game is a very large project.</p>
                            <a href="https://michaelyount.itch.io/why-did-the-chicken-cross-the-universe" className="btn btn-outline-success" target='_blank' rel='noopener noreferrer'>Chicken</a>
          </div>
          <div className='col'>
                    <img src={wind} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Wind Whirl</h5>
                            <p className="card-text">Follow a seed throught he world and help it survive.</p>
                            <a href="https://michaelyount.itch.io/wind-whirl" className="btn btn-outline-success" target='_blank' rel='noopener noreferrer'>Seed</a>
            </div>  
        <div className='row'>  
          <div className='col'>
                    <img src={pill} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Deeper into the Mind.</h5>
                            <p className="card-text">This was my entry into ludum dare 48. This game was created in 72 hours with a small team.</p>
                            <a href="https://michaelyount.itch.io/deeper-into-the-mind" className="btn btn-outline-success" target='_blank' rel='noopener noreferrer'>Ludum48</a>
            </div>  
            <div className='col'>
                    <img src={join} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Join Logic</h5>
                            <p className="card-text">This was my entry into another game jam, where a small team completed this in 48 hours.</p>
                            <a href="https://grantyoumanywishes.itch.io/joinlogic" className="btn btn-outline-success" target='_blank' rel='noopener noreferrer'>Join Logic</a>
            </div>  
          </div>
          </div>
        <div className="game-container">
          <div className="">
                <a href='https://michaelyount.itch.io/wind-whirl' target='_blank' rel='noopener noreferrer'> <img src={bubbleAttack} className="card-img-top bubbleAttack img-fluid" alt="..."/></a>
            <div className="">
              <p className="card-text-games">Video game development has many facets, 
              <br/>the work is never ending and there are more tasks that seem to build every day.
              <br/> Adding features to a game can be very challenging and time consuming, but these are all learning experiences.</p>
            </div>
            
          </div>
        </div>
        <footer>
                        <ul>
                           <li>
                                <img src={mypic} className=" logo-big" alt="..."/>
                            </li> 
                                <li>
                                <a className="footer-li" aria-current="page" href="https://github.com/Michael-Yount" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li>
                                <a className="footer-li" aria-current="page" href="https://www.linkedin.com/in/michael-yount/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                                </li>
                        </ul>

                </footer>
      </div>
    )
}
export default Games;
