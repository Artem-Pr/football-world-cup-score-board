import {Game} from '../types';
import {getGamesSortedByTotalScore} from './getGamesSortedByTotalScore';

const mockedGames: Game[] = [
    [{name: 'country', goals: 0}, {name: 'country', goals: 0}],
    [{name: 'country', goals: 1}, {name: 'country', goals: 1}],
    [{name: 'country', goals: 0}, {name: 'country', goals: 1}],
    [{name: 'country', goals: 5}, {name: 'country', goals: 4}],
    [{name: 'country', goals: 4}, {name: 'country', goals: 5}],
    [{name: 'country', goals: 7}, {name: 'country', goals: 7}],
    [{name: 'country', goals: 10}, {name: 'country', goals: 5}],
    [{name: 'country', goals: 2}, {name: 'country', goals: 7}],
]

describe('getGamesSortedByTotalScore', () => {
    test('should return sorted games array', () => {
        const sortedGamesArray = [
            [{name: 'country', goals: 10}, {name: 'country', goals: 5}],
            [{name: 'country', goals: 7}, {name: 'country', goals: 7}],
            [{name: 'country', goals: 5}, {name: 'country', goals: 4}],
            [{name: 'country', goals: 4}, {name: 'country', goals: 5}],
            [{name: 'country', goals: 2}, {name: 'country', goals: 7}],
            [{name: 'country', goals: 1}, {name: 'country', goals: 1}],
            [{name: 'country', goals: 0}, {name: 'country', goals: 1}],
            [{name: 'country', goals: 0}, {name: 'country', goals: 0}],
        ]
        const mockedGamesDeepCopy = JSON.parse(JSON.stringify(mockedGames))
        expect(getGamesSortedByTotalScore(mockedGamesDeepCopy)).toEqual(sortedGamesArray)
    })
})
