import React, {useState} from 'react';
import {getNextGame} from './helpers/getNextGame';
import {updateGameIndex} from './helpers/updateGameIndex';

export interface Team {
    name: string
    goals: number
}

function App() {
    const [currentGameIndex, setCurrentGameIndex] = useState(0)
    const [currentGame, setCurrentGame] = useState<[Team, Team] | null>(null)
    
    const handleStartNewGame = () => {
        setCurrentGame(getNextGame(currentGameIndex))
        setCurrentGameIndex(updateGameIndex(currentGameIndex))
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
