import React from 'react';
import './ScoreBar.css';

const ScoreBar = props =>
    <nav className="navbar">
        <h5>Current Score: {props.score}</h5>
        <h5>High Score: {props.highScore}</h5>
    </nav>

export default ScoreBar;