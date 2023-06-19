import lavaBoss from '../bossLevel.png';
import apps from '../BadBAnkThumbnail.png';
import art from '../mugshot.png'
 
 function Home() {
    console.log('home');
    return (
        <div className="container">
            <div className="container">
                <div className="cool-phrase">
                    <p>I strive to develop excellent user experiences</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="card">
                    <img src={apps} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Apps</h5>
                            <p className="card-text">Functionality and productivity work together in my app designs. 
                            <br/>Click here to discover some of my apps.</p>
                            <a href="#/WebApps" className="btn">Apps</a>
                        </div>
                    </div>  
            </div>
                <div className="col">
                <div className="card">
                    <img src={art} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Digital Art</h5>
                            <p className="card-text">Digital art is truly expressive, I enjoy many different approaches to digital art.</p>
                            <a href="#/Art" className="btn">Art</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={lavaBoss} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Games</h5>
                            <p className="card-text">Here is where my digital art comes alive in these games that I have developed.</p>
                            <a href="#/Games" className="btn">Games</a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
 }
 export default Home;