
import './App.css';
import FirstCol from './components/FirstCol';
import SecondCol from './components/SecondCol';
import ThirdCol from './components/ThirdCol';
import './App.css'
function App() {
  return (
    <div className='Main-container'>
      <ThirdCol />
      <div className='Main-container-row'>
        <FirstCol />
        <SecondCol />

      </div>
    </div>
  );
}

export default App;
