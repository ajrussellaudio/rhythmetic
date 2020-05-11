import periodOfBeat from './periodOfBeat';

export default (beats, bpm, sampleRate) => {
    return periodOfBeat(bpm) * beats * sampleRate;
};
