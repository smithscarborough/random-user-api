import './App.css';
import FetchRandomUserRCC from './components/FetchRandomUserRCC';
import FetchRandomUserRFC from './components/FetchRandomUserRFC';

function App() {
  return (
    <div className="App">
      <h1>Random User:</h1>
      {/* <FetchRandomUserRCC /> */}
      <FetchRandomUserRFC />
    </div>
  );
}

export default App;
