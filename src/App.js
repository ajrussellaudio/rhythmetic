import React, { useState } from 'react';
import TempoInput from './components/TempoInput';
import BeatsPerSecond from './components/BeatsPerSecond';
import PeriodOfBeat from './components/PeriodOfBeat';
import LengthInSamples from './components/LengthInSamples';
import DelayTime from './components/DelayTime';
import './App.sass';
import GitHubLink from './components/GitHubLink';

function App() {
    const [tempo, setTempo] = useState(120);

    return (
        <React.Fragment>
            <GitHubLink />
            <section className="section">
                <div className="container">
                    <TempoInput tempo={tempo} setTempo={setTempo} />
                    <BeatsPerSecond tempo={tempo} />
                    <PeriodOfBeat tempo={tempo} />
                    <DelayTime tempo={tempo} />
                    <LengthInSamples tempo={tempo} />
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
