import './App.scss';
import Intro from './Pages/Intro';
import Presentation from './Pages/Portfolio/Presentation';
import { MainContextProvider } from './MainContextProvider';


function App() {


 
  return (
  <>
    <MainContextProvider>
      <Intro />
      <Presentation />
    </MainContextProvider>
  </>
  );
}

export default App;
