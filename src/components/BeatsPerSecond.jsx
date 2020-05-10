import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';

const BeatsPerSecond = ({ tempo }) => (
    <div className="box">
        <strong>{beatsPerSecond(tempo).toPrecision(4)}</strong> beats per second
    </div>
);

export default BeatsPerSecond;
