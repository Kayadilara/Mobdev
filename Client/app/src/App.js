import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [name, setName] = useState("naam");
  const [age, setAge] = useState("leeftijd");


useEffect(() => {
  fetch('http://localhost:3001/name')
    .then(res => res.json())
    .then(res => setName(res.name))

  fetch('http://localhost:3001/age')
    .then(res => res.json())
    .then(res => setAge(res.age))
});
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hallo {name} is {age} !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
