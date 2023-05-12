import './App.css';
import Header from './components/header/header';
import Dinners from './components/dinners/dinners';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Set the height on load
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    // Listen to resize events and update the height
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className='Cover'>
        <Header />
        <Dinners />
      </div>
    </div>
  );
}

export default App;
