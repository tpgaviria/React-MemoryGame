import React from "react";
import "./ClickTile.css";

const ClickTile = props => (
    <div
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url(${props.image})` }}
        className="click-tile"
    />
);

export default ClickTile;