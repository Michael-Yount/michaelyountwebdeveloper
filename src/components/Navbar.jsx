import logo from '../MYlogo.png';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid topbar">
                <img src={logo} alt="logo" className='logo'/>
                <a className="navbar-brand" href="../components">Michael Yount</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Home"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Home</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/WebApps"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Applications</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Biography"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Biography</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Resume"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Resume</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/DigitalArt"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Digital Art</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Games"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Games</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://github.com/Michael-Yount">Github</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/michael-yount/">LinkedIn</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;