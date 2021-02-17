import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter nb="3" />
      <Counter nb="8" />
    </div>
  );
}

export default App;


//pour créer la doc du projet en html : 
// installer betterdocs et jsdoc
// créer un fichier jsdoc.conf.json
// jsdoc -c jsdoc.conf.json