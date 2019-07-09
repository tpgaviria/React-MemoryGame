import React from "react";
import ClickTile from "./ClickTile";
import Container from "./Container";
import characters from "../../characters.json";

class Game extends React.Component {
    state = {
        characters,
        score: 0,
        highScore: 0
    };


    render() {
        return (
            <Container>
                {this.state.characters.map(tile => (
                    <ClickTile
                        key={tile.id}
                        id={tile.id}
                        handleClick={this.handleClick}
                        image={tile.image}
                    />
                ))}
            </Container>
        )
    }
}

export default Game;