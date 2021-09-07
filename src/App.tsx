import './App.css';
import { Game } from './components/base/Game';

function App() {
  return (
    <div className="App">
      <Game width={9} height={9}/>
    </div>
  );
}

export default App;
