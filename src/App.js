import './App.css';
import Homepage from './pages/homepage';
import ListMovie from './pages/list-movie';
import ContactUs from './pages/contact-us';
import Movie from './pages/movie';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
   <Router>
    <div className='app'>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/list-movies" element={<ListMovie />}/>
        <Route path="/movie/:movieId" element={<Movie />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;