import React from 'react';
import {getAllJSDocTagsOfKind} from 'typescript';
import './App.css';

function App() {
  const handleSubmit = () =>{
    console.log('test')
  }
  return (
    <div className="App">
      <textarea className="textBox"></textarea>
      <button className = 'submit' type = 'button' onClick = {handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
