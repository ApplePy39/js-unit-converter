import Header from './components/Header';
import DropdownInput from './components/DropdownInput';
import DropdownOutput from './components/DropdownOutput';
import Output from './components/Output';
import Input from './components/Input';
import { useState } from 'react';

function App() {
    const [selected, setSelected] = useState("");
    const [selectedOutput, setSelectedOutput] = useState("");

  return (
    <div className="App">
      <Header />
      <DropdownInput selected={selected} setSelected={setSelected} /><Input />
      <DropdownOutput style={{ top: "200%" }}
          selectedOutput={selectedOutput}
          setSelectedOutput={setSelectedOutput}
      />

        <Output selected={selected} selectedOutput={selectedOutput}/>
    </div>
  );
}

export default App;
 