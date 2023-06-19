import bubbleAttack from '../bubbleAttack.png'

function Games() {
    console.log('games');
    return (
        <div className="game-container">
            <h1 className='page-title'>Games</h1>
        <div className="card">
        <img src={bubbleAttack} className="card-img-top bubbleAttack" alt="..."/>
        <div className="card-body">
          <p className="card-text">Video game development has many facets, the work is never ending and there are more tasks that seem to build every day. Adding features to a game can be very challenging and time consuming, but these are all learning experiences.</p>
        </div>
      </div>
        </div>
    )
}
export default Games;
