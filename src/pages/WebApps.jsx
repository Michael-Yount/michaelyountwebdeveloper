import bankApp from '../BadBAnkThumbnail.png';
import dadJoke from '../dadJokes.png';
import kitchenprep from '../kitchenprep.png';
import tictac from '../Tic tac toe.png';

function WebApps() {
    console.log('web apps');
    return (
        <div className='container'>
            <div className='title-container'>
            <h1 className="name-title">Apps</h1>
                <h2 className='cool-phrase'>Here is my work with Javascript, CSS, HTML, react.js, SaSS, APIs, and many other web technologies including database and testing.</h2>
            </div>
       <div className='row'> 
        <div className="container col">
                <img src={bankApp} className="img-fluid pictures" alt="..."/>
                <h5 className="card-title">My Bad Bank</h5>
                 <p className="card-text">This is a project used to display the use of Global state and routing functionality of a single page application.
                 <br/> Click here to check out this app.</p>
                 <a href='https://michael-yount.github.io/my_bad_bank_react/' type='button' className='btn btn-outline-success'>My Bad Bank</a>
        </div>
        <div className="container col">
                <img src={dadJoke} className="img-fluid pictures" alt="..."/>
                <h5 className="card-title">Dad Joke Generator</h5>
                 <p className="card-text">This is an API fetch app. In this app I utilize axios fetch and bring data into the react app. Future additions will include Chuck Norris Jokes.
                 <br/> Click here to check out this app.</p>
                 <a href='https://michael-yount.github.io/TheAbsolutlyWorseDadJokes/' type='button' className='btn btn-outline-success'>Dad Jokes</a>
           </div> 
    </div>
    <div className='row'>
        <div className="container col">
                <img src={kitchenprep} className="img-fluid pictures" alt="..."/>
                <h5 className="card-title">Kitchen Prep App</h5>
                 <p className="card-text">This is a productivity and team building app generally used for comercial kitchens.
                 <br/> Click here to check out this app.</p>
                 <a href='https://kitchenprepapp.netlify.app/' type='button' className='btn btn-outline-success'>Kitchen App</a>
        </div>
        <div className="container col">
                <img src={tictac} className="img-fluid pictures" alt="..."/>
                <h5 className="card-title">React Tic Tac Toe</h5>
                 <p className="card-text">This is a productivity and team building app generally used for comercial kitchens.
                 <br/> Click here to check out this app.</p>
                 <a href='https://michael-yount.github.io/tic-tac-toe/' type='button' className='btn btn-outline-success'>Kitchen App</a>
        </div>
    </div>
    </div>
    
    )
}
export default WebApps;
