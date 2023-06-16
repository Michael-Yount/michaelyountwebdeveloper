import { Container } from 'react-bootstrap';

function Navbar() {
    console.log('navbar');
    return (
        <Container>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="../Home.jsx">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/Home.jsx">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/WebbApps.jsx">Web Apps</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/Biography.jsx">Biography</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/Resume.jsx">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/DigitalArt.jsx">Digital Art</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/src/Games.jsx">Games</a>
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
        </Container>
    )
}

export default Navbar;