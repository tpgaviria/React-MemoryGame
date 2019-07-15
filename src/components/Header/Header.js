import React from 'react';
import './Header.css';
import HeroImage from './HeroImage/HeroImage';

const Header = props => (
    <header className="header">
        <HeroImage />
        <h2 className="instructions">Click on each image, but only once!</h2>
    </header>
);

export default Header;