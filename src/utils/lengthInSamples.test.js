import lengthInSamples from './lengthInSamples';

describe('lengthInSamples', () => {
    [
        { tempo: 120, beats: 4, sampleRate: 44100, output: 88200 },
        { tempo: 120, beats: 4, sampleRate: 48000, output: 96000 },
        { tempo: 60, beats: 1, sampleRate: 44100, output: 44100 },
    ].forEach(({ tempo, beats, sampleRate, output }) => {
        test(`${beats} beats at ${tempo} BPM at ${sampleRate} Hz returns ${output} samples`, () => {
            expect(lengthInSamples(beats, tempo, sampleRate)).toEqual(output);
        });
    });
});
