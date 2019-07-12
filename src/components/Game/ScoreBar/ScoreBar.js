import React from 'react';
import './ScoreBar.css';

const ScoreBar = props =>
    <nav className="navbar">
        <h5>{props.highScore}</h5>
    </nav>

export default ScoreBar;