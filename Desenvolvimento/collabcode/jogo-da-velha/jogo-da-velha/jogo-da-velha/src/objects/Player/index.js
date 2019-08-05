import React from 'react';

import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png';

const Player = ( {player} ) => {
    const players = [];
    players['x'] = PlayerX;
    players['o'] = PlayerO;
    
    return(
        <button className="player">
            <img src={players[player]} alt={`Jogador ${player} `} />
        </button>
    )
};

export default Player