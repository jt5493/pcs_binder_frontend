import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import BindersContainer from './containers/BindersContainer'

class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="Container">
          <BindersContainer />
        </div>
      </div>
    );
  }
  
}


export default App;
