import React, {useState} from 'react';
import {parse} from './util/parse';
import {sampleData, sampleSubData} from './sampleData';
import './App.css';

function App() {
  const [plays, setPlays] = useState<string>(sampleData);
  const handleSubmit = () => {
    const results = parse(plays);
    console.log(results)
  };
  return (
    <div className="App">
      <textarea
        value={plays}
        onChange={(e) => setPlays(e.target.value)}
        className="textBox"
      ></textarea>
      <button className="submit" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
