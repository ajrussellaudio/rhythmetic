import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';

const PeriodOfBeat = ({ tempo }) => (
    <div className="box">
        <strong>
            {(1000 * periodOfBeat(tempo)).toLocaleString(undefined, {
                maximumFractionDigits: 3,
            })}
        </strong>{' '}
        milliseconds per beat
    </div>
);

export default PeriodOfBeat;
