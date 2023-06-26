import stray from '../chickenJumpShot500px.png'

function Art() {
    console.log('Art');
    return (
        <div className="container">
            <h1 className="page-title">Digital Art</h1>
            <div className="row">
                <div className="col">
                    <a href="https://www.behance.net/michaelyount2" type="button" target='_blank' rel='noopener noreferrer'> <img src={stray} className="img-fluid" alt="..."/>  </a>
                    <p className='cool-phrase'>
                        
                    </p>
                     <a href="https://www.behance.net/michaelyount2" type="button" className="btn btn-outline-success picture-btn" target='_blank' rel='noopener noreferrer'>Here is a link to many examples of my digital art, pixel art, 3d and 2d animations, game environments and more...</a>

                </div>
            </div>
        </div>
    )
}
export default Art;
