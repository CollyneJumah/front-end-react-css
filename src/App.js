import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Authentication from './pages/Auth';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%', right:'0'}}></div>
      <div className='blur' style={{top:'36%', left:'-8rem'}}></div>
      <Home/>
      {/* <Authentication /> */}
    </div>
  );
}

export default App;
