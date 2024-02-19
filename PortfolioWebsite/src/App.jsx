import './App.scss';
import Intro from './Pages/Intro';
import Presentation from './Pages/Portfolio/Presentation';
import Fullstack from './Pages/Portfolio/Fullstack';
import Contact from './Pages/Portfolio/Contact';
import { MainContextProvider } from './MainContextProvider';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';


function App() {


 
  return (
  <>

      <MainContextProvider>

        <Intro />
        <Presentation />
        <Fullstack />
        <Contact />
      </MainContextProvider>

  </>
  );
}

export default App;
