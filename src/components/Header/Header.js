import React from 'react';
import './Header.css';
import HeroImage from './HeroImage/HeroImage';

const Header = props => (
    <header className="header">
        <HeroImage />
        <h1>Memory Game</h1>
        <h3>blah blah blah</h3>
    </header>
);

export default Header;