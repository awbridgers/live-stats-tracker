import React, {useState} from 'react';
import {parse} from './util/parse';
import {sampleData, sampleSubData} from './sampleData';
import './App.css';
import {Lineup} from './roster';
import Table from 'rc-table';
import {cols} from './tableSetup';
import {calcTime} from './util/calculateTime';
import {calcTotal} from './util/calculateTotal';

function App() {
  const [plays, setPlays] = useState<string>(sampleData);
  const [results, setResults] = useState<Lineup[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const handleSubmit = () => {
    const results = parse(plays);
    setResults(results);
    setShow(true);
  };
  if (show) {
    return (
      <div>
        <button type="button" onClick={() => setShow(false)}>
          Back
        </button>
        <Table
          className="resultsTable"
          scroll={{x: true}}
          columns={cols}
          data={[...results, calcTotal(results)].map((x, i) => {
            return {
              ...x,
              players: x.players.map((x) => x.name).join('-'),
              time: calcTime(x.time),
              attemptedTwosFor: x.madeTwosFor + x.missedTwosFor,
              attemptedTwosAgainst: x.madeTwosAgainst + x.missedTwosAgainst,
              attemptedThreesFor: x.madeThreesFor + x.missedThreesFor,
              attemptedThreesAgainst:
                x.madeThreesAgainst + x.missedThreesAgainst,
              key: i,
            };
          })}
        />
      </div>
    );
  }
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
      <div style={{color: 'white'}}></div>
    </div>
  );
}

export default App;
