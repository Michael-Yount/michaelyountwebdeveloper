import bubbleAttack from '../bubbleAttack.png'
import jammer from '../500x499jammer.png';
import smallshot from '../smallsho21.png';
import chicken from '../Menu Screen.png';
import wind from '../WindWhirlTitleeyes.png';
import pill from '../pill.png';

function Games() {
    console.log('games');
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="">
                    <img src={chicken} className="card-img-top img-fluid" alt="..."/>
                        <div className="">
                            <h5 className="card-title">Why Did the Chicken Cross the Universe?</h5>
                            <p className="card-text">This game is a very large project.</p>
                            <a href="https://michaelyount.itch.io/why-did-the-chicken-cross-the-universe" className="btn btn-outline-success">Chicken</a>
                 </div>
            </div>  
          </div>
          <div className='col'>
            <div className="">
                    <img src={wind} className="card-img-top img-fluid" alt="..."/>
                        <div className="">
                            <h5 className="card-title">Wind Whirl</h5>
                            <p className="card-text">Follow a seed throught he world and help it survive.</p>
                            <a href="https://michaelyount.itch.io/wind-whirl" className="btn btn-outline-success">Seed</a>
                      </div>
            </div>  
          </div>
          <div className='col'>
            <div className="">
                    <img src={pill} className="card-img-top img-fluid" alt="..."/>
                        <div className="">
                            <h5 className="card-title">Deeper into the Mind.</h5>
                            <p className="card-text">This was my entry into ludum dare 48.</p>
                            <a href="https://michaelyount.itch.io/deeper-into-the-mind" className="btn btn-outline-success">Ludum48</a>
                      </div>
            </div>  
          </div>
        </div>
        <div className="game-container">
            <h1 className='page-title'>Games</h1>
          <div className="">
                <img src={bubbleAttack} className="card-img-top bubbleAttack img-fluid" alt="..."/>
            <div className="">
              <p className="card-text-games">Video game development has many facets, 
              <br/>the work is never ending and there are more tasks that seem to build every day.
              <br/> Adding features to a game can be very challenging and time consuming, but these are all learning experiences.</p>
            </div>
            <div className='container'>
            <img src={jammer} className="img-fluid pictures" alt="..."/>
            <img src={smallshot} className="img-fluid pictures" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Games;
