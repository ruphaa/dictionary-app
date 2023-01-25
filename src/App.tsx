import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from "./components/input/input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dictionary App
        </p>
        <Input/>
      </header>
    </div>
  );
}

export default App;
