import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import {fetchBinders}from './actions/fetchBinders'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBinders({type: 'FETCH_BINDERS', payload: {title: 'Japan'}})
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

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.binders
//   }
// }


export default connect(null, {fetchBinders})(App);
