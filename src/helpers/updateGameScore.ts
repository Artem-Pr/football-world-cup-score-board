import {Game} from '../types';
import {getRandomScore} from './getRandomScore';

export const updateGameScore = (currentGame: Game) => {
    const goal = getRandomScore()
    
    return currentGame.map((team, idx) => {
        if (idx === goal) return {
            ...team,
            goals: team.goals + 1
        }
        return team
    }) as Game
}
