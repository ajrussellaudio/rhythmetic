import React, { useState } from 'react';
import lengthInSamples from '../utils/lengthInSamples';
import Output from '../components/Output';

const sampleRates = [44100, 48000];

const beatDivisions = [
    { value: 0.25, label: '1/16 note' },
    { value: 0.5, label: '1/8 note' },
    { value: 1, label: '1/4 note' },
    { value: 2, label: '1/2 note' },
    { value: 4, label: '1 bar' },
    { value: 8, label: '2 bars' },
];

const LengthInSamples = ({ tempo }) => {
    const [selectedSampleRate, setSelectedSampleRate] = useState(
        sampleRates[0]
    );

    const [selectedBeatDivision, setSelectedBeatDivision] = useState(4);

    const handleSampleRateChange = (event) => {
        setSelectedSampleRate(event.target.value);
    };

    const handleBeatDivisionChange = (event) => {
        setSelectedBeatDivision(parseFloat(event.target.value));
    };

    return (
        <React.Fragment>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">at a sample rate of</label>
                </div>
                <div className="field-body">
                    <div className="field has-addons">
                        <div className="control">
                            <div className="select">
                                <select
                                    value={selectedSampleRate}
                                    onChange={handleSampleRateChange}
                                >
                                    {sampleRates.map((sampleRate) => (
                                        <option
                                            value={sampleRate}
                                            key={sampleRate}
                                        >
                                            {sampleRate.toLocaleString()}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-static">Hz</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">a length of</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="select">
                                <select
                                    value={selectedBeatDivision}
                                    onChange={handleBeatDivisionChange}
                                >
                                    {beatDivisions.map(({ label, value }) => (
                                        <option value={value} key={value}>
                                            {label} ({value} beat
                                            {value === 1 ? '' : 's'})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Output
                label="is"
                units="samples"
                value={lengthInSamples(
                    selectedBeatDivision,
                    tempo,
                    selectedSampleRate
                ).toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                })}
            />
        </React.Fragment>
    );
};

export default LengthInSamples;
