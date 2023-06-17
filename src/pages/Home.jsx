import lavaBoss from '../lavaBoss.png';
 
 function Home() {
    console.log('home');
    return (
        <div className="container">
            <div className="container">
                <div className="cool-phrase">
                    <p>I am developing excellent user experiences</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    
                </div>
                <div className="col">
                </div>
                <div className="col">
                <div className="card">
        <img src={lavaBoss} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Web Applications</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#/Games" className="btn btn-primary">Games</a>
        </div>
      </div>  
                </div>
            </div>
        </div>
    )
 }
 export default Home;