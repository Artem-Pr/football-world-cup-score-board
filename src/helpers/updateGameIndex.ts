import {gamesList} from './gamesList';

export const updateGameIndex = (currentGameIndex: number) => (
    currentGameIndex >= gamesList.length ? 0 : currentGameIndex + 1
)
