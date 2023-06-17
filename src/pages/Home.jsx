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
          <h5 className="card-title">Games</h5>
          <p className="card-text">Here is where my digital art comes alive in these games that I have developed.</p>
          <a href="#/Games" className="btn btn-primary">Games</a>
        </div>
      </div>  
                </div>
            </div>
        </div>
    )
 }
 export default Home;