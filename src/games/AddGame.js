import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'; 

class AddGame extends Component {
    constructor(){
        super();
        this.state = {
            show: true
        }
    }
    handleClose = () => this.props.resetAddGameStatus(false);
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="game-model">
                        Name:<input placeholder="game name"></input><br/>
                        Description:<input placeholder="game is argumental"></input><br/>
                        Questions:<input></input>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>                
            </div>
        );
    }
}

export default AddGame;