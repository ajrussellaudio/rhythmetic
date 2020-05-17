import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';
import Output from '../components/Output';

const BeatsPerSecond = ({ tempo }) => (
    <div className="box">
        <Output
            label="is equal to"
            units="Hz (beats per second)"
            value={beatsPerSecond(tempo).toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 5,
            })}
        />
    </div>
);

export default BeatsPerSecond;
