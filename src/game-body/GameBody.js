import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'; 
import GameDetails from './GameDetails';
import Questions from './Questions';

class GameBody extends Component {
    constructor(){
        super();
        this.state = {
            tabStatus : 'Game Details'
        }

    }
    handleClick = (event) => {
        this.setState({tabStatus: event.target.textContent})
    }
    render() {
        const {tabStatus} = this.state;
        const {gameDetails, questions} = this.props.gameData;
        return (
            <div>
                <Nav  className="" variant="pills" defaultActiveKey="games">
                    <Nav.Item>
                        <Nav.Link value='game-etails' onClick = {this.handleClick} eventKey="game-details">Game Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link value='questions' onClick = {this.handleClick} eventKey="questions">Questions({questions.length})</Nav.Link>
                    </Nav.Item>
                </Nav>
                { tabStatus === 'Game Details' ? <GameDetails gameDetails={gameDetails}/> : undefined }
                { tabStatus === 'Questions' ? <Questions questions={questions}/> : undefined}
            </div>
        );
    }
}

export default GameBody;