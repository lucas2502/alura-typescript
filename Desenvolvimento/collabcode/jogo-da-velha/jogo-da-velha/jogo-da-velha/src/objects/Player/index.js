import React from 'react';

import './styles.css';

import PlayerX from '../../img/X.png'

const Player = () => (
    <button className="player">
        <img src={PlayerX} alt="X" />
    </button>
);

export default Player