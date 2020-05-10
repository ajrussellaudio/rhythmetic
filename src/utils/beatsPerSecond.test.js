import beatsPerSecond from './beatsPerSecond';

describe('beatsPerSecond', () => {
    [
        { input: 120, expected: 2.0 },
        { input: 60, expected: 1.0 },
        { input: 180, expected: 3.0 },
        { input: 90, expected: 1.5 },
    ].forEach(({ input, expected }) => {
        test(`returns ${expected} for ${input} BPM`, () => {
            expect(beatsPerSecond(input)).toEqual(expected);
        });
    });
});
