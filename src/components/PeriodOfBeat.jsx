import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';

const PeriodOfBeat = ({ tempo }) => (
    <div>{periodOfBeat(tempo).toPrecision(4)} seconds</div>
);

export default PeriodOfBeat;
