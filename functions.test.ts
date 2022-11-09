const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const testArray = [1,2,3];
    test('array return equals argument sent', () => {
        expect(shuffleArray(testArray)).toHaveLength(3)
    })
    test('array contains same values', () => {
        expect(shuffleArray(testArray)).toEqual(expect.arrayContaining(testArray));
    })
})