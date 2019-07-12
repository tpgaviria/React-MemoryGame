import React from "react";
import ClickTile from "./ClickTile";
import Container from "./Container";
import ScoreBar from "./ScoreBar";
import characters from "../../characters.json";

class Game extends React.Component {
    state = {
        characters,
        score: 0,
        highScore: 0
    };

    componentDidMount() {
        this.setState({ characters: this.shuffleCharacters(this.state.characters) });
    }

    shuffleCharacters = characters => {
        console.log('shuffled');
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return characters;
    };

    handleClick = id => {
        console.log('handleclick');
        let correctGuess = false;
        const newCharacterData = this.state.characters.map(character => {
            const characterArray = { ...character };
            if (characterArray.id === id) {
                if (!characterArray.clicked) {
                    characterArray.clicked = true;
                    correctGuess = true;
                }
            }
            return characterArray;
        });
        console.log(correctGuess);
        correctGuess ? this.handleCorrectGuess(newCharacterData) : this.handleIncorrectGuess(newCharacterData);
    }

    handleCorrectGuess = newCharacterData => {
        console.log('correct');
        const { highScore, score } = this.state;
        const newScore = score + 1;
        const newHighScore = newScore > highScore ? newScore : highScore;
        this.setState({
            data: this.shuffleCharacters(newCharacterData),
            score: newScore,
            highScore: newHighScore
        })
    };

    handleIncorrectGuess = newCharacterData => {
        // this.setState({
        //     data: this.reset
        // })
        console.log('incorrect');
    }

    render() {
        return (
            <div>
                <ScoreBar score={this.state.score} highScore={this.state.highScore} />
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
            </div>
        )
    }
}

export default Game;