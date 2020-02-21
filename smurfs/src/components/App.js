import React from "react";
import {connect} from 'react-redux';
import "./App.css";
import StartButton from "./StartButton";
import SmurfsContainer from "./SmurfsContainer";

const App = props => {

    return (
      <div className="App">
        <h1>BUILD A SMURFS VILLAGE!</h1>
        

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
