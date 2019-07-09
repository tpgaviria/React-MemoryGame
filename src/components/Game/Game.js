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

    componentDidMount() {
        this.setState({characters: this.shuffleCharacters(this.state.characters)});
    }

    shuffleCharacters = characters => {
        for (let i = characters.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return characters;
    }


    render() {
        return (
            <Container>
                {this.state.characters.map(character => (
                    <ClickTile
                        key={character.id}
                        id={character.id}
                        handleClick={this.handleClick}
                        image={character.image}
                    />
                ))}
            </Container>
        )
    }
}

export default Game;