import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';
import Output from '../components/Output';

const PeriodOfBeat = ({ tempo }) => (
    <div className="box">
        <Output
            label="each beat lasts"
            units="millseconds"
            value={(1000 * periodOfBeat(tempo)).toLocaleString(undefined, {
                maximumFractionDigits: 1,
            })}
        />
    </div>
);

export default PeriodOfBeat;
