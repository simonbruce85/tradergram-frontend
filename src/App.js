import './App.css';
import Navbar from './components/Navbar';
import Backimage from './assets/bg1.png'
import Home from './components/Home';

function App() {
  return (
    <div className=' w-full min-h-screen bg-cover bg-fixed '  style={{ backgroundImage: `url(${Backimage})` }}>
      <div className='bg-black bg-opacity-30 w-full min-h-screen'>
      <Navbar/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
