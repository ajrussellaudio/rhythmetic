import transpose from './transpose';

describe('transpose', () => {
    [
        { tempo: 120.0, semitones: 12, output: 240.0 },
        { tempo: 120.0, semitones: -12, output: 60.0 },
        { tempo: 120.0, semitones: -7, output: 80.09 },
    ].forEach(({ tempo, semitones, output }) => {
        test(`${tempo} BPM transposed by ${semitones} semitones is ${output} BPM`, () => {
            expect(transpose(tempo, semitones)).toBeCloseTo(output);
        });
    });
});
