import {Game} from '../types';

export const getGamesSortedByTotalScore = (games: Game[]) => games.sort((gameA, gameB) => {
    const gameATotalScore = gameA[0].goals + gameA[1].goals
    const gameBTotalScore = gameB[0].goals + gameB[1].goals
    return gameBTotalScore - gameATotalScore
})
