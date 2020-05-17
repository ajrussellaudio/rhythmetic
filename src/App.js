import React, { useState } from 'react';
import TempoInput from './panels/TempoInput';
import BeatsPerSecond from './panels/BeatsPerSecond';
import PeriodOfBeat from './panels/PeriodOfBeat';
import LengthInSamples from './panels/LengthInSamples';
import DelayTime from './panels/DelayTime';
import GitHubLink from './panels/GitHubLink';
import Transpose from './panels/Transpose';
import './App.sass';

function App() {
    const [tempo, setTempo] = useState(120);

    return (
        <React.Fragment>
            <GitHubLink />
            <div className="hero is-light">
                <div className="hero-body">
                    <h1 className="title">rhythmetic</h1>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <TempoInput tempo={tempo} setTempo={setTempo} />
                    <BeatsPerSecond tempo={tempo} />
                    <PeriodOfBeat tempo={tempo} />
                    <DelayTime tempo={tempo} />
                    <LengthInSamples tempo={tempo} />
                    <Transpose tempo={tempo} setTempo={setTempo} />
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
