import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DarkModeButton from './components/DarkModeButton';
import PokemonPage from './components/PokemonPage';
function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#474F7A]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<PokemonPage />}></Route>
        </Routes>
        <DarkModeButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
