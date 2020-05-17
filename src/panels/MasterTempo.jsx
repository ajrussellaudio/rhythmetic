import React from 'react';
import TempoInput from '../components/TempoInput';

const MasterTempo = ({ tempo, setTempo }) => (
    <TempoInput tempo={tempo} setTempo={setTempo} label="a tempo of" />
);

export default MasterTempo;
