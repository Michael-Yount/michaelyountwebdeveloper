import lavaBoss from '../bossLevel.png';
import apps from '../BadBAnkThumbnail.png';
import art from '../mugshot.png'
import mypic from '../MYlogo.png'

 
 function Home() {
    console.log('home');
    return (
        <div className="container">
            <div className="title-container">
                <div className="cool-phrase">
                    <h1 className='name-title'>Michael<br/>Yount</h1>
                    <p>I strive to develop excellent user experiences for everyone.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={apps} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Apps</h5>
                            <p className="card-text">Functionality and productivity work together in my app designs. 
                            <br/>Click here to discover some of my apps.</p>
                            <a href="#/WebApps" className="btn btn-outline-success">Apps</a>
                </div>
                <div className="col">
                    <img src={art} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Digital Art</h5>
                            <p className="card-text">Digital art is truly expressive, I enjoy many different approaches to digital art.</p>
                            <a href="#/Art" className="btn btn-outline-success">Art</a>
                </div>
            <div className='row'>   
                <div className="col">
                    <img src={lavaBoss} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Games</h5>
                            <p className="card-text">Here is where my digital art comes alive in these games that I have developed.</p>
                            <a href="#/Games" className="btn btn-outline-success">Games</a>
                </div>
                <div className="col">
                    <img src={lavaBoss} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Games</h5>
                            <p className="card-text">Here is where my digital art comes alive in these games that I have developed.</p>
                            <a href="#/Games" className="btn btn-outline-success">Games</a>
                </div>
            </div>     
            </div>
    <div className='footer'>
    <img src={mypic} className="img-fluid" alt="..."/>

    </div>
        </div>
    )
 }
 export default Home;