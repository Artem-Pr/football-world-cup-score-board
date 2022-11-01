import React, {useMemo, useState} from 'react';
import {getNextGame} from './helpers/getNextGame';
import {updateGameIndex} from './helpers/updateGameIndex';
import {Game} from './types';
import {updateGameScore} from './helpers/updateGameScore';
import {getGamesSortedByTotalScore} from './helpers/getGamesSortedByTotalScore';

function App() {
    const [showGamesSummary, setShowGamesSummary] = useState(false)
    const [games, setGames] = useState<Game[]>([])
    const [currentGameIndex, setCurrentGameIndex] = useState(0)
    const [currentGame, setCurrentGame] = useState<Game | null>(null)
    
    const gamesSummary = useMemo(() => getGamesSortedByTotalScore(games), [games])
    
    const handleStartNewGame = () => {
        setCurrentGame(getNextGame(currentGameIndex))
        setCurrentGameIndex(updateGameIndex(currentGameIndex))
    }
    
    const handleUpdateScore = () => {
        currentGame && setCurrentGame(updateGameScore(currentGame))
    }
    
    const handleFinishGame = () => {
        currentGame && setGames([currentGame, ...games])
        setCurrentGame(null)
    }
    
    const handleToggleGamesSummary = () => {
        setShowGamesSummary(!showGamesSummary)
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
            <button
                onClick={handleFinishGame}
                disabled={!Boolean(currentGame)}
            >
                Finish game
            </button>
            <button
                onClick={handleToggleGamesSummary}
                disabled={!Boolean(games.length)}
            >
                Show games summary
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
            {showGamesSummary &&
                <ol>
                    {gamesSummary.map((game, idx) => (
                        <li key={idx}>
                            <span>{`${game[0].name} ${game[0].goals}`}</span>
                            <span>{' - '}</span>
                            <span>{`${game[1].name} ${game[1].goals}`}</span>
                        </li>
                    ))}
                </ol>
            }
        </>
    );
}

export default App;
