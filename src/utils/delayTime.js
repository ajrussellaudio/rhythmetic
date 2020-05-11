import periodOfBeat from './periodOfBeat';

export default (tempo, beats, multiplier) => {
    return periodOfBeat(tempo) * beats * multiplier * 1000;
};
