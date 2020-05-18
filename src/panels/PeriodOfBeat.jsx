import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';
import Output from '../components/Output';
import { inMilliseconds } from '../constants/displayUnits';

const PeriodOfBeat = ({ tempo }) => (
    <Output
        label="each beat lasts"
        units="milliseconds"
        value={inMilliseconds(1000 * periodOfBeat(tempo))}
    />
);

export default PeriodOfBeat;
