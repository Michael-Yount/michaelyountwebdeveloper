import lavaBoss from '../bossLevel.png';
import apps from '../BadBAnkThumbnail.png';
import art from '../mugshot.png'
import mypic from '../MYlogo.png'

 
 function Home() {
    console.log('home');
    return (
        <div className="container">
            <div className="title-container">
                    <h1 className='name-title'>Michael<br/> Yount</h1>
                <div className="cool-phrase">
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
            </div>
            <div className='row'>   
                <div className="col">
                    <div className='item-cont'>
                    <img src={lavaBoss} className="card-img-top img-fluid" alt="..."/>
                            <h5 className="card-title">Games</h5>
                            <p className="card-text">Here is where my digital art comes alive in these games that I have developed.</p>
                            <a href="#/Games" className="btn btn-outline-success">Games</a>
                            </div>
                </div>
              
            </div>     
                    <footer>
                        <ul>
                           <li>
                                <img src={mypic} className=" logo-big" alt="..."/>
                            </li> 
                                <li>
                                <a className="footer-li" aria-current="page" href="https://github.com/Michael-Yount" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li>
                                <a className="footer-li" aria-current="page" href="https://www.linkedin.com/in/michael-yount/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                                </li>
                        </ul>

                </footer>
            </div>
    
    )
 }
 export default Home;