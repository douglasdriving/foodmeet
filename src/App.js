import './App.css';
import Header from './components/header/header';
import Dinners from './components/dinners/dinners';

function App() {
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
