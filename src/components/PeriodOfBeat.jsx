import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';

const PeriodOfBeat = ({ tempo }) => (
    <div className="box">
        <strong>{periodOfBeat(tempo).toPrecision(4)}</strong> seconds
    </div>
);

export default PeriodOfBeat;
