//img
import logo from './logo.svg';
//css
import './App.css';

//Router
import { Link, Route, Routes } from 'react-router-dom';

//Components
import { Home } from "./components/Home";
import { Work } from "./components/Work";
import { Education } from "./components/Education";
function App() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" aria-label="Tenth navbar example">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse justify-content-md-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Home</span></Link>
                  <Link to="/" className="nav-link d-none d-sm-block">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/work" className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Work</span></Link>
                  <Link to="/work" className="nav-link d-none d-sm-block">Work</Link>
                </li>
                <li class="nav-item">
                  <Link to="/education" className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Education</span></Link>
                  <Link to="/education" className="nav-link d-none d-sm-block">Education</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/education" element={<Education />} />
      </Routes>

      <footer id="footer" class="flex-shrink-0 py-4 text-dark-50">
        <div class="container text-center">
          <img className="footer-logo" src={require("./assets/img/upang.png")} alt={"Logo"}/>
          <p class="mt-5">Phinma - University of Pangasinan</p>
          <p>Colllege of Information Technology</p>
        </div>
      </footer>


    </>
  );
}

export default App;
