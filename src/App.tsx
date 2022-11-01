import React, {useState} from 'react';
import {getNextGame} from './helpers/getNextGame';
import {updateGameIndex} from './helpers/updateGameIndex';
import {Team} from './types';
import {updateGameScore} from './helpers/updateGameScore';

function App() {
    const [currentGameIndex, setCurrentGameIndex] = useState(0)
    const [currentGame, setCurrentGame] = useState<[Team, Team] | null>(null)
    
    const handleStartNewGame = () => {
        setCurrentGame(getNextGame(currentGameIndex))
        setCurrentGameIndex(updateGameIndex(currentGameIndex))
    }
    
    const handleUpdateScore = () => {
        if (currentGame) {
            setCurrentGame(updateGameScore(currentGame))
        }
    }
    
    return (
        <>
            <h1>Football World Cup Score Board</h1>
            <button
                onClick={handleStartNewGame}
                disabled={Boolean(currentGame)}
            >
                Start a game
            </button>
            <button
                onClick={handleUpdateScore}
                disabled={!Boolean(currentGame)}
            >
                Update score
            </button>
            {currentGame &&
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    width: '400px',
                    textAlign: 'center'
                }}>
                    <h2>{currentGame[0].name}</h2>
                    <h2>{currentGame[1].name}</h2>
                    <h2>{currentGame[0].goals}</h2>
                    <h2>{currentGame[1].goals}</h2>
                </div>
            }
        </>
    );
}

export default App;
