import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'; 
import GameDetails from './GameDetails';
import Questions from './Questions';

class GameBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabStatus : 'Game Details',
            // gameData : props.gameData
        }
    }
    handleClick = (event) => {
        this.setState({tabStatus: event.target.textContent})
    }
    handleAddQuestion = () => {
        console.log("***", this.state.gameData)
    }
    render() {
        // const {tabStatus, gameData : { gameDetails, questions}} = this.state;
        // const {gameDetails, questions} = gameData;
        const {tabStatus} = this.state;
        const {gameDetails, questions} = this.props.gameData;
        const gameDetailsOptionTab = (
            <div className="game-mdf">
                <div className="opt-style" onClick={this.handleDuplicateGame}>Duplicate Game</div>
                <div className="opt-style" onClick={this.handleEditGameDetails}>Edit Game Details</div>
            </div>
        );
        const questionsOptionTab = (
            <div className="opt-style" onClick={this.handleAddQuestion}>Add Question</div>
        );
        return (
            <div>
                <header className="game-header">
                    <Nav  className="" variant="pills" defaultActiveKey="games">
                        <Nav.Item>
                            <Nav.Link value='game-details' onClick = {this.handleClick} eventKey="game-details">Game Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link value='questions' onClick = {this.handleClick} eventKey="questions">Questions</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {tabStatus === 'Game Details'? gameDetailsOptionTab : undefined}
                    {tabStatus === 'Questions' ? questionsOptionTab : undefined}
                </header>
                { tabStatus === 'Game Details' ? <GameDetails gameDetails={gameDetails}/> : undefined }
                { tabStatus === 'Questions' ? <Questions questions={questions}/> : undefined}
            </div>
        );
    }
}

export default GameBody;