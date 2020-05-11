import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';

const PeriodOfBeat = ({ tempo }) => (
    <div className="box">
        each beat lasts{' '}
        <strong>
            {(1000 * periodOfBeat(tempo)).toLocaleString(undefined, {
                maximumFractionDigits: 1,
            })}
        </strong>{' '}
        milliseconds
    </div>
);

export default PeriodOfBeat;
