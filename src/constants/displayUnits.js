export const inMilliseconds = (time) =>
    time.toLocaleString(undefined, {
        maximumFractionDigits: 1,
    });

export const inBPM = (tempo) =>
    tempo.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 3,
    });

export const inHz = (frequency) =>
    frequency.toLocaleString(undefined, {
        maximumFractionDigits: 5,
    });

export const inSamples = (samples) =>
    samples.toLocaleString(undefined, {
        maximumFractionDigits: 0,
    });

export const inSemitones = (pitch) =>
    pitch.toLocaleString(undefined, {
        maximumFractionDigits: 4,
    });
