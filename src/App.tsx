import React, {useState} from 'react';
import {parse} from './util/parse';
import './App.css';
import {Lineup} from './roster';
import Table from 'rc-table';
import {cols} from './tableSetup';
import {calcTime} from './util/calculateTime';
import {calcTotal} from './util/calculateTotal';
import Switch from 'react-switch';
import { sampleSideArmData } from './sampleData';

function App() {
  const [plays, setPlays] = useState<string>('');
  const [results, setResults] = useState<Lineup[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [men, setMen] = useState<boolean>(true);
  const [liveStats, setLiveStats] = useState<boolean>(true)
  const handleSubmit = () => {
    const results = parse(plays, men, liveStats);
    console.log(results);
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
        placeholder="Enter the play by play data here, starting with both teams starters."
      ></textarea>
      <button className="submit" type="button" onClick={handleSubmit}>
        Submit
      </button>
      <div style={{color: 'white'}}></div>
      <div className = 'sliderDiv'>
        <div style = {{color: men ? '#242525': 'white', fontSize: '24px'}}>Women</div>
        <Switch
          checked={men}
          onChange={(checked) => setMen(checked)}
          checkedIcon={false}
          uncheckedIcon={false}
          borderRadius={6}
          onColor = {'#CFB53B'}
          offColor = {'#CFB53B'}
          className = 'slider'
        />
        <div style = {{color: men ? 'white':'#242525', fontSize: '24px'}}>Men</div>
      </div>
      <div className = 'sliderDiv'>
        <div style = {{color: liveStats ? '#242525': 'white', fontSize: '24px'}}>SideArm</div>
        <Switch
          checked={liveStats}
          onChange={(checked) => setLiveStats(checked)}
          checkedIcon={false}
          uncheckedIcon={false}
          borderRadius={6}
          onColor = {'#CFB53B'}
          offColor = {'#CFB53B'}
          className = 'slider'
        />
        <div style = {{color: liveStats ? 'white':'#242525', fontSize: '24px'}}>LiveStats</div>
      </div>
    </div>
  );
}

export default App;
