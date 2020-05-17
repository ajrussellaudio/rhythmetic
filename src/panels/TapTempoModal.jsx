import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import {
    timeInterval,
    tap,
    bufferCount,
    pluck,
    skip,
    map,
} from 'rxjs/operators';
import AudioRateTimer from '../utils/AudioRateTimer';

import '../scss/centered.scss';

const averageTempoOfIntervals = (intervals) => {
    const totalInterval = intervals.reduce(
        (sum, interval) => sum + interval,
        0
    );
    const averageInterval = totalInterval / intervals.length;
    return 60 / averageInterval;
};

const TapTempoModal = ({ close, setTempo }) => {
    const tapTempo = new Subject();
    const timer = new AudioRateTimer();
    const [tappedTempo, setTappedTempo] = useState(120.0);

    useEffect(() => {
        tapTempo
            .pipe(
                timeInterval(timer),
                skip(1),
                pluck('interval'),
                bufferCount(3),
                map(averageTempoOfIntervals),
                tap(setTappedTempo)
            )
            .subscribe();
    }, [tapTempo, timer]);

    useEffect(() => {
        const tapIfSpacebarPressed = ({ code }) => {
            if (code === 'Space') {
                tapTempo.next();
            }
        };
        document.addEventListener('keydown', tapIfSpacebarPressed);
        return () =>
            document.removeEventListener('keydown', tapIfSpacebarPressed);
    }, [tapTempo]);

    const handleRoundClick = () => {
        setTappedTempo(Math.round(tappedTempo));
    };

    const handleUseClick = () => {
        setTempo(tappedTempo);
        close();
    };

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
                <section className="modal-card-body">
                    <div className="field has-addons">
                        <div className="control">
                            <button
                                className="button is-large is-dark"
                                onClick={() => tapTempo.next()}
                            >
                                tap
                            </button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-large is-static"
                                onClick={() => tapTempo.next()}
                            >
                                or press space
                            </button>
                        </div>
                    </div>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                type="text"
                                value={tappedTempo.toLocaleString(undefined, {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 3,
                                })}
                                className="input"
                                readOnly
                            />
                        </div>
                        <div className="control">
                            <button className="button is-static">bpm</button>
                        </div>
                        <div className="control">
                            <button
                                className="button is-dark"
                                onClick={handleRoundClick}
                            >
                                round
                            </button>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={handleUseClick}>
                        use
                    </button>
                    <button className="button" onClick={close}>
                        cancel
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default TapTempoModal;
