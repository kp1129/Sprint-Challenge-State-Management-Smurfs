import React from 'react';
import {connect} from 'react-redux';
import {getStarted} from '../actions/smurfsActions';

const StartButton = props => {
    const handleClick = event => {
        event.preventDefault();
        console.log('the button works');
        props.getStarted();
    }

    return (
        
        <button className='start-button' type='submit' onClick={handleClick}>Get Started!</button>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isUpdating: state.isUpdating
    };
};

export default connect(mapStateToProps, {getStarted})(StartButton);