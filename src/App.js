import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/binders')
    .then(r => r.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          hello
        </header>
      </div>
    );
  }
  
}

export default App;
