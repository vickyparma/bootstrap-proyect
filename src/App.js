import logo from './imagen19.jpg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contenido from './components/contenido/Contenido';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/AboutUs';
import { Programas } from './Pages/Programas';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/programas" element={<Programas/>}/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos Al Mundo!       
          </p>
        
        <Contenido/>
        
        <a href='#'> "Click aquí" </a>
        
      </header>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
