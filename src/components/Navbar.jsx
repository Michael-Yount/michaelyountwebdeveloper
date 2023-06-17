import logo from '../MYlogo.png';

function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} alt="logo" className='logo'/>
                <a className="navbar-brand" href="../components">Michael Yount</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/WebApps">Web Apps</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Biography">Biography</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Resume">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/DigitalArt">Digital Art</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Games">Games</a>
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