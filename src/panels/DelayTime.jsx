import React, { useState } from 'react';
import delayTime from '../utils/delayTime';
import '../scss/hideOnSmallDevice.scss';
import Output from '../components/Output';
import { inMilliseconds } from '../constants/displayUnits';

const delayTimes = [
    { beats: 4, label: '1/1' },
    { beats: 2, label: '1/2' },
    { beats: 1, label: '1/4' },
    { beats: 0.5, label: '1/8' },
    { beats: 0.25, label: '1/16' },
    { beats: 0.125, label: '1/32' },
    { beats: 0.0625, label: '1/64' },
];

const modifiers = [
    { label: 'straight', multiplier: 1 },
    { label: 'dotted', multiplier: 1.5 },
    { label: 'triplet', multiplier: 2 / 3 },
];

const DelayTime = ({ tempo }) => {
    const [selectedDelayTime, setSelectedDelayTime] = useState(4);
    const [selectedMultiplier, setSelectedMultiplier] = useState(1);

    const handleDelayTimeChange = (event) => {
        setSelectedDelayTime(event.target.value);
    };

    const handleMultiplierChange = (event) => {
        setSelectedMultiplier(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">syncs to a delay of</label>
                </div>
                <div className="field-body">
                    <div className="field has-addons">
                        <div className="control">
                            <div className="select">
                                <select
                                    value={selectedDelayTime}
                                    onChange={handleDelayTimeChange}
                                >
                                    {delayTimes.map(({ label, beats }) => (
                                        <option value={beats} key={label}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="control hide-on-small-device">
                            <button className="button is-static">note</button>
                        </div>
                        <div className="control">
                            <div className="select">
                                <select
                                    value={selectedMultiplier}
                                    onChange={handleMultiplierChange}
                                >
                                    {modifiers.map(({ label, multiplier }) => (
                                        <option value={multiplier} key={label}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Output
                label="when the delay time is"
                units="milliseconds"
                value={inMilliseconds(
                    delayTime(tempo, selectedDelayTime, selectedMultiplier)
                )}
            />
        </React.Fragment>
    );
};

export default DelayTime;
