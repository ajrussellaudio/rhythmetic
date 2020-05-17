class AudioRateTimer {
    constructor() {
        this.context = new AudioContext();
    }

    now = () => {
        return this.context.currentTime;
    };
}

export default AudioRateTimer;
