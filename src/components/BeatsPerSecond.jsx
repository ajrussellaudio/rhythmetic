import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';

const BeatsPerSecond = ({ tempo }) => (
    <div>{beatsPerSecond(tempo).toPrecision(4)} beats per second</div>
);

export default BeatsPerSecond;
