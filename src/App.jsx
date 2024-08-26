import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/homepage'
import Samples from './pages/samples'

function App() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h1>React + GSAP</h1>

        <nav>
          <ul className='d-flex list-unstyled'>
            <li className='ps-4'><Link to="/">Home</Link></li>
            <li className='ps-4'><Link to="/samples">Samples</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/samples" element={<Samples />} />
      </Routes>
    </>
  )
}

export default App
