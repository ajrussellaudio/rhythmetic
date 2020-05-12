export default (tempo, semitones) => {
    return tempo * Math.pow(2, semitones / 12);
};
