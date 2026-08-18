import './css/App.css';
import MovieCard from './Components/MovieCard';
import Navbar from './Components/Navbar';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import { MovieProvider } from './Context/movieContext';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
