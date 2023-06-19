import bankApp from '../BadBAnkThumbnail.png';
import dadJoke from '../dadJokes.png';


function WebApps() {
    console.log('web apps');
    return (
       <div className='row'> 
            <h1 className="page-title">Apps</h1>
        <div className="container-apps col">
            <div className="card">
                <img src={bankApp} className="img-fluid" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">My Bad Bank</h5>
                 <p className="card-text">This is a project used to display the use of Global state and routing functionality of a single page application.
                 <br/> Click here to check out this app.</p>
                 <a href='https://michael-yount.github.io/my_bad_bank_react/' type='button' className='btn'>My Bad Bank</a>
                </div>
            </div>
        </div>
        <div className="container-apps col">
            <div className="card">
                <img src={dadJoke} className="img-fluid" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Dad Joke Generator</h5>
                 <p className="card-text">This is an API fetch app. In this app I utilize axios fetch and bring data into the react app. Future additions will include Chuck Norris Jokes.
                 <br/> Click here to check out htis app.</p>
                 <a href='https://michael-yount.github.io/TheAbsolutlyWorseDadJokes/' type='button' className='btn'>Dad Jokes</a>
                </div>
            </div>
        </div>
    </div>  
    )
}
export default WebApps;
