import React, { useEffect } from 'react';
import { fromEvent, Subject } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';
import '../scss/centered.scss';

class AudioRateTimer {
    constructor() {
        this.context = new AudioContext();
    }

    now = () => {
        return this.context.currentTime;
    };
}

const TapTempoModal = ({ close }) => {
    const timer = new AudioRateTimer();
    const tapTempo = new Subject();

    useEffect(() => {
        tapTempo.pipe(timeInterval(timer), tap(console.log)).subscribe();
    }, []);

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <h3 className="modal-card-title">tap tempo</h3>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={close}
                    ></button>
                </header>
                <section className="modal-card-body centered">
                    <button
                        className="button is-large"
                        onClick={() => tapTempo.next()}
                    >
                        tap
                    </button>
                </section>
                <footer className="modal-card-foot">
                    <button className="button">save</button>
                    <button className="button" onClick={close}>
                        cancel
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default TapTempoModal;
