import logo from '../MYlogo.png';

function Navbar() {
    return (
            <nav className="navbar sticky-top navbar-expand-lg font-link">
            <div className="container-fluid topbar">
                <img src={logo} alt="logo" className='logo'/>
                <a className="navbar-brand font-link" href="#/Biography">Michael Yount</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav justify-content-right">
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
                    <a className="nav-link" aria-current="page" href="#/Resume"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Resume/Contact</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Games"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Games</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#/Art"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Art</span></a>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Navbar;