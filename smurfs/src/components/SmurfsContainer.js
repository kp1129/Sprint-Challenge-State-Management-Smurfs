import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import AddSmurfForm from "./AddSmurfForm";

const SmurfsContainer = props => {
  return (
    <div className="smurfs-container">
      {props.smurfs.map(smurf => {
        console.log(smurf);
        return <Smurf data={smurf} />;
      })}

      <AddSmurfForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {})(SmurfsContainer);
