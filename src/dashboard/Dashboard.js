import React, {useState} from 'react';
import { Nav } from 'react-bootstrap'; 
import './Dashboard.css';
import Games from '../games/Games';
import Players from '../players/Players';

const Dashboard = (props) => {
    const [tabStatus, setTabStatus] = useState('Games');

    function handleClick(event){
        setTabStatus(event.target.textContent);
    }

    return (
        <div>
            <Nav  className="dashboard" variant="pills" defaultActiveKey="games">
                <Nav.Item>
                    <Nav.Link className="items" value='games' onClick = {handleClick} eventKey="games">Games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="items" value='players' onClick = {handleClick} eventKey="players">Players</Nav.Link>
                </Nav.Item>
            </Nav>
            { tabStatus === 'Games' ? <Games /> : undefined }
            { tabStatus === 'Players' ? <Players /> : undefined}
        </div>
    );
};

export default Dashboard;