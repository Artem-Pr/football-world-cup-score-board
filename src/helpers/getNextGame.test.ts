import {getNextGame} from './getNextGame';

describe('getNextGame', () => {
    test('should return first game tuple', () => {
        const firstGame = [
            {
                name: 'Uruguay',
                goals: 0,
            },
            {
                name: 'Italy',
                goals: 0,
            },
        ]
        expect(getNextGame(0)).toEqual(firstGame)
    })
    
    test('should return third game tuple', () => {
        const firstGame = [
            {
                name: 'Mexico',
                goals: 0,
            },
            {
                name: 'Canada',
                goals: 0,
            },
        ]
        expect(getNextGame(2)).toEqual(firstGame)
    })
    
    test('should return first game tuple if currentGameIndex bigger then gameList.length', () => {
        const firstGame = [
            {
                name: 'Uruguay',
                goals: 0,
            },
            {
                name: 'Italy',
                goals: 0,
            },
        ]
        expect(getNextGame(100)).toEqual(firstGame)
    })
})
