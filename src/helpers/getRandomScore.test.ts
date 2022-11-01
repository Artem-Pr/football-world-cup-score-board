import {getRandomScore} from './getRandomScore';

const mockMath = Object.create(global.Math);

describe('getRandomScore', () => {
    test('should return 0', () => {
        mockMath.random = () => 0.4;
        global.Math = mockMath;
        expect(getRandomScore()).toBe(0)
    })
    
    test('should return 1', () => {
        mockMath.random = () => 0.5;
        global.Math = mockMath;
        expect(getRandomScore()).toBe(1)
    })
})
