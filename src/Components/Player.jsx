import React from 'react';
import Footer from './Footer';
import "./Player.css";
import PlayerBody from './PlayerBody';
import Sidebar from './Sidebar';

function Player() {
    return (
        <div className="player">
            <div className='player__content'>
                <Sidebar />
                <PlayerBody />
            </div>
                <Footer />
        </div>
    )
}

export default Player
