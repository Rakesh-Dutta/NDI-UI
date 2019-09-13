import React, { Component } from 'react';
import './Games.css';
import GameBody from '../game-body/GameBody';
import AddGame from './AddGame';

class Games extends Component {
    constructor(){
        super();
        this.state = {
            data : [
                {gameDetails:{name:'game0', description:'game0 is argumental'}, questions:['abc', 'xyz', 'lmn']},
                {gameDetails:{name:'game1', description:'game1 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game2', description:'game2 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game3', description:'game3 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game4', description:'game4 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game5', description:'game5 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game6', description:'game6 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game7', description:'game7 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game8', description:'game8 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game9', description:'game9 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game10', description:'game10 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game11', description:'game11 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game12', description:'game12 is argumental'}, questions:['abc', 'xyz', 'lmn']}, 
                {gameDetails:{name:'game13', description:'game13 is argumental'}, questions:['abc', 'xyz', 'lmn']}
            ],
            gameIndex: -1,
            isAddGame: false
        }
    }
    handleClick = (event) => {
        this.setState({gameIndex: event.target.textContent.split('')[4]});
    }
    addGame = () => {
        this.setState({isAddGame: true})
    }
    resetAddGameStatus = (isAddGame) => {
        this.setState({isAddGame: isAddGame})
    
    }
    render() {
        const {data, gameIndex, isAddGame} = this.state;
        const gameBoard = data.map( (game, index) => {
            const individualClass = `individual-game ${index}`;
            return(
                <div key={index} value={index} className={individualClass} onClick={this.handleClick}>
                    {game.gameDetails.name}
                </div>
            )
        })
        return (
            <div>
                <header className="game-header">
                    <div className="all-game">All Games({data.length})</div>
                    <div className="add-game" onClick={this.addGame}>
                    <div className="add-icon">
                        <div className="plus-icon">+</div>Add Game</div>
                    </div>    
                </header>
                <body className="games">
                    {gameBoard}
                </body>
                {isAddGame && <AddGame resetAddGameStatus={this.resetAddGameStatus}/>}
                {gameIndex !== -1 ? <GameBody gameData={data[gameIndex]}/> : undefined}
            </div>
            
        );
    }
}

export default Games;