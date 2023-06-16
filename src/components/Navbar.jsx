
function Navbar() {
    console.log('navbar');
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="../MYlogo.jpg" alt="logo" width={30} height={30}/>
                <a className="navbar-brand" href="../components">Michael Yount web development</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../Home.jsx">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../WebApps.jsx">Web Apps</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../Biography.jsx">Biography</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../Resume.jsx">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../DigitalArt.jsx">Digital Art</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../Games.jsx">Games</a>
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