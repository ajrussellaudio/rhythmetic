import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';
import Output from '../components/Output';

const PeriodOfBeat = ({ tempo }) => (
    <Output
        label="each beat lasts"
        units="millseconds"
        value={(1000 * periodOfBeat(tempo)).toLocaleString(undefined, {
            maximumFractionDigits: 1,
        })}
    />
);

export default PeriodOfBeat;
