import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';

const BeatsPerSecond = ({ tempo }) => (
    <div className="box">
        is equal to{' '}
        <strong>
            {beatsPerSecond(tempo).toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 5,
            })}
        </strong>{' '}
        beats per second
    </div>
);

export default BeatsPerSecond;
