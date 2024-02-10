import { merge } from '../src/merge';

describe('Merge function', () => {
    it('should merge three sorted collections', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [9, 7, 6];
        const collection3 = [2, 4, 8];

        const merged = merge(collection1, collection2, collection3);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
