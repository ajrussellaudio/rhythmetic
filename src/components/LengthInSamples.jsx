import React, { useState } from 'react';
import lengthInSamples from '../utils/lengthInSamples';

const sampleRates = [44100, 48000];

const beatDivisions = [
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
        setSelectedBeatDivision(event.target.value);
    };

    return (
        <div className="box">
            <div className="field">
                <div className="control">
                    <div className="select">
                        <select
                            value={selectedSampleRate}
                            onChange={handleSampleRateChange}
                        >
                            {sampleRates.map((sampleRate) => (
                                <option value={sampleRate} key={sampleRate}>
                                    {sampleRate.toLocaleString()} Hz
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
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
            <strong>
                {lengthInSamples(
                    selectedBeatDivision,
                    tempo,
                    selectedSampleRate
                ).toLocaleString(undefined, { maximumFractionDigits: 1 })}
            </strong>{' '}
            samples
        </div>
    );
};

export default LengthInSamples;
