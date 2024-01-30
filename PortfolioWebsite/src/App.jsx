import './App.scss';
import Intro from './Pages/Intro';
import Presentation from './Pages/Portfolio/Presentation';
import Fullstack from './Pages/Portfolio/Fullstack';
import { MainContextProvider } from './MainContextProvider';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';


function App() {


 
  return (
  <>

      <MainContextProvider>

        <Intro />
        <Presentation />
        <Fullstack />
      </MainContextProvider>

  </>
  );
}

export default App;
