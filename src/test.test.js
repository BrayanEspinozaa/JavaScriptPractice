import { sampleTest } from "./index";

describe('sum module', () => {
    test('return the value that receive', () => {
        const expected = 1
        const result = sampleTest(1)

        expect(result).toBe(expected);
    });
});