import React, { useState } from 'react';
import TempoInput from './components/TempoInput';
import BeatsPerSecond from './components/BeatsPerSecond';
import PeriodOfBeat from './components/PeriodOfBeat';

function App() {
    const [tempo, setTempo] = useState(120);

    return (
        <React.Fragment>
            <TempoInput tempo={tempo} setTempo={setTempo} />
            <BeatsPerSecond tempo={tempo} />
            <PeriodOfBeat tempo={tempo} />
        </React.Fragment>
    );
}

export default App;
