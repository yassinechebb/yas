import logo from './logo.svg';
import './App.css';
import Navbarr from "./components/Navbarr"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainVideo from './components/MainVideo';
import Suggestions from './components/Suggestions';
function App() {
  return (
    <div className="App">
      
      <Navbarr/>
      <div className='containerr'>
      <MainVideo/>
      <Suggestions/>
      </div>

    </div>
  );
}

export default App;
