import periodOfBeat from './periodOfBeat';

describe('periodOfBeat', () => {
    [
        { input: 120, expected: 0.5 },
        { input: 60, expected: 1.0 },
        { input: 180, expected: 0.333 },
        { input: 90, expected: 0.667 },
    ].forEach(({ input, expected }) => {
        test(`returns ${expected} for ${input} BPM`, () => {
            expect(periodOfBeat(input)).toBeCloseTo(expected);
        });
    });
});
