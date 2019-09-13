import React, { Component } from 'react';
import './GameBody.css'

class GameDetails extends Component {
    render() {
        const {gameDetails} = this.props;
        return (
            <div>
                <div className="game-details"><div className="header-wd">Name</div>: <div className="body-wd">{gameDetails.name}</div></div>
                <div className="game-details"><div className="header-wd">Description</div >: <div className="body-wd">{gameDetails.description}</div></div>
            </div>
        );
    }
}

export default GameDetails;