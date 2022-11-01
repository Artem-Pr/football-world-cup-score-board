import {updateGameIndex} from './updateGameIndex';

describe('updateGameIndex', () => {
    test('should return next index number', () => {
        expect(updateGameIndex(2)).toBe(3)
    })
    
    test('should return 0 if the currentGameIndex is bigger than the gamesList.length', () => {
        expect(updateGameIndex(5)).toBe(0)
    })
})
