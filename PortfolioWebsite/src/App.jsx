import './App.scss';
import Navbar from './Navigation/Navbar';
import Intro from './Pages/Intro';
import Presentation from './Pages/Portfolio/Presentation';
import Fullstack from './Pages/Portfolio/Fullstack';
import Contact from './Pages/Portfolio/Contact';
import { MainContextProvider } from './MainContextProvider';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import TikTok from './Pages/Extras/Tiktok';
import Game from './Pages/Extras/Game';



function App() {

 
  return (
  <>
    <Router>
      <MainContextProvider>
        <Navbar />
        <Routes>
          <Route path="/ReactPortfolio" element={<MainPage />} />
          <Route path="/ReactPortfolio/tiktok" element={<TikTok />} />
          <Route path='/ReactPortfolio/game' element={<Game />} />
        </Routes>
      </MainContextProvider>
    </Router>
  </>
  );
}

function MainPage () {
  return(
    <>
        <Intro />
        <Presentation />
        <Fullstack />
        <Contact />
    </>
  )
}
export default App;
