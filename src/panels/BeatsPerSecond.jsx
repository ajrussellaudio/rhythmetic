import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';
import Output from '../components/Output';

const BeatsPerSecond = ({ tempo }) => (
    <Output
        label="is equal to"
        units="Hz"
        value={beatsPerSecond(tempo).toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 5,
        })}
    />
);

export default BeatsPerSecond;
