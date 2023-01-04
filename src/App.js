import './App.css';
import Headers from './components/headers/headers';
import Homepage from './pages/homepage/homepage';
import ListMovie from './pages/list-movie/list-movie';
import ContactUs from './pages/contact-us/contact-us';
import Movie from './pages/movie/movie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='app'>
        <Headers />
        <div className='main-router'>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/list-movies" element={<ListMovie />} />
            <Route path="/movies/:movieId" element={<Movie />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;