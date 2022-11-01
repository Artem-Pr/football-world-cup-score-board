import {updateGameScore} from './updateGameScore';
import {Team} from '../types';
import {getRandomScore} from './getRandomScore';

jest.mock('./getRandomScore', () => ({
    getRandomScore: jest.fn()
}))

const mockedGetRandomScore = getRandomScore as unknown as jest.MockedFunction<() => number>

describe('updateGameScore', () => {
    test('should return an updated game with adding a goal for the first team', () => {
        mockedGetRandomScore.mockImplementation(() => 0)
        const currentGame: [Team, Team] = [
            {
                name: 'Uruguay',
                goals: 0,
            },
            {
                name: 'Italy',
                goals: 0,
            },
        ]
        const updatedGame: [Team, Team] = [
            {
                name: 'Uruguay',
                goals: 1,
            },
            {
                name: 'Italy',
                goals: 0,
            },
        ]
        expect(updateGameScore(currentGame)).toEqual(updatedGame)
    })
    
    test('should return an updated game with adding a goal for the second team', () => {
        mockedGetRandomScore.mockImplementation(() => 1)
        const currentGame: [Team, Team] = [
            {
                name: 'Uruguay',
                goals: 0,
            },
            {
                name: 'Italy',
                goals: 0,
            },
        ]
        const updatedGame: [Team, Team] = [
            {
                name: 'Uruguay',
                goals: 0,
            },
            {
                name: 'Italy',
                goals: 1,
            },
        ]
        expect(updateGameScore(currentGame)).toEqual(updatedGame)
    })
})
