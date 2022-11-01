import {Team} from '../App';
import {gamesList} from './gamesList';

export const getNextGame = (currentGameIndex: number) => {
    const gameIndex = currentGameIndex > gamesList.length ? 0 : currentGameIndex
    const countriesForNextGame: [string, string] = gamesList[gameIndex]
    return countriesForNextGame.map(country => ({
        name: country,
        goals: 0
    })) as [Team, Team]
}
