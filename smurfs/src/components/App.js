import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import StartButton from "./StartButton";
import SmurfsContainer from "./SmurfsContainer";

const App = props => {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        {props.smurfs.length === 0 ? <StartButton /> :
          props.isUpdating ? <p>Loading...</p> :
          <SmurfsContainer />        
        }
      </div>
    );  
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,    
    isUpdating: state.isUpdating
  }
}

export default connect(mapStateToProps, {})(App);
