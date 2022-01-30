import Header from './components/Header';
import Unit from './components/Unit'
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0);

    return (
    <div className="App">
      <Header />
        <Unit number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
 