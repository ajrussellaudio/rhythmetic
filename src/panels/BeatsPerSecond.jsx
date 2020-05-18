import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';
import Output from '../components/Output';
import { inHz } from '../constants/displayUnits';

const BeatsPerSecond = ({ tempo }) => (
    <Output
        label="is equal to"
        units="Hz"
        value={inHz(beatsPerSecond(tempo))}
    />
);

export default BeatsPerSecond;
