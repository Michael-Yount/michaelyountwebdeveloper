import bubbleAttack from '../bubbleAttack.png'
import jammer from '../500x499jammer.png';
import smallshot from '../smallsho21.png';

function Games() {
    console.log('games');
    return (
      <div className='container'>
        <div className="game-container">
            <h1 className='page-title'>Games</h1>
          <div className="card">
                <img src={bubbleAttack} className="card-img-top bubbleAttack img-fluid" alt="..."/>
            <div className="card-body">
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
