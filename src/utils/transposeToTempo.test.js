import transposeToTempo from './transposeToTempo';

describe('transposeToTempo', () => {
    [
        { originalTempo: 120.0, targetTempo: 240.0, semitones: 12 },
        { originalTempo: 120.0, targetTempo: 60.0, semitones: -12 },
        { originalTempo: 120.0, targetTempo: 80.09, semitones: -7 },
    ].forEach(({ originalTempo, targetTempo, semitones }) => {
        test(`to sync ${originalTempo} BPM to ${targetTempo} BPM tune it ${semitones} semitones`, () => {
            expect(transposeToTempo(originalTempo, targetTempo)).toBeCloseTo(
                semitones
            );
        });
    });
});
