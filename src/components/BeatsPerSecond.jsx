import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';

const BeatsPerSecond = ({ tempo }) => (
    <div className="box">
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
