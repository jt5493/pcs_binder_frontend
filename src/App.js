import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import BindersContainer from './containers/BindersContainer'

class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <BindersContainer />
        </header>
      </div>
    );
  }
  
}

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.binders
//   }
// }


export default App;
