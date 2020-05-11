import delayTime from './delayTime';

describe('delayTime', () => {
    [
        { tempo: 120.0, beats: 4, multiplier: 1, output: 2000 },
        { tempo: 120.0, beats: 2, multiplier: 1, output: 1000 },
        { tempo: 120.0, beats: 0.5, multiplier: 2 / 3, output: 166.666 },
    ].forEach(({ tempo, beats, multiplier, output }) => {
        test(`${beats} beats at ${tempo} BPM multiplied by ${multiplier} returns ${output}`, () => {
            expect(delayTime(tempo, beats, multiplier)).toBeCloseTo(output);
        });
    });
});
