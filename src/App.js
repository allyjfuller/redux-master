import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// connect component to redux
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome {this.props.username}</h2>

          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
}

// mapStateToProps method
// takes one argument: the state from redux store
// used to get some state from your redux store and assign then to a prop
// WHY: so we can now use that state in our component via props
const mapStateToProps = (state) => ({
    // creating prop name
    // value is equal to state
    // state accesses the property in the user reducer
    username: state.user.username
    // to have the user.username rendered in the app
  })


// App component now connected to Redux
// we can now get some state and update some state
export default connect(mapStateToProps)(App);


/*  ** RECAP **  

1) Tell React app which store is providing the state
2) Wrap the root component (<App />) inside <Provider></Provider>
3) Import { connect }
4) Connect component to Redux with:
    export default connect(mapStateToProps)(App);
5) USe mapStateToProps to get data from the state and use it in the component

  ** You can connect components individually to Redux when you want to:
      - Get some state
      - Update some state

*/


