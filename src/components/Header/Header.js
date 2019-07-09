import React from 'react';
import './Header.css';
import HeroImage from './HeroImage/HeroImage';
import MessageBar from './MessageBar/MessageBar';

const Header = props => (
    <header className="header">
        <HeroImage />
        <MessageBar />
        <h1>Memory Game</h1>
        <h3>blah blah blah</h3>
    </header>
);

export default Header;