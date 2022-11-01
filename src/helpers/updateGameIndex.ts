import {gamesList} from './gamesList';

export const updateGameIndex = (currentGameIndex: number) => (
    currentGameIndex < gamesList.length - 1 ? currentGameIndex + 1 : 0
)
