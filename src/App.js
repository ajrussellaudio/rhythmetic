import React, { useState } from 'react';
import BeatsPerSecond from './panels/BeatsPerSecond';
import PeriodOfBeat from './panels/PeriodOfBeat';
import LengthInSamples from './panels/LengthInSamples';
import DelayTime from './panels/DelayTime';
import GitHubLink from './panels/GitHubLink';
import Transpose from './panels/Transpose';
import './App.sass';
import TransposeToTempo from './panels/TransposeToTempo';
import MasterTempo from './panels/MasterTempo';

const SplitWithLines = ({ children }) => {
    return (
        <div className="container">
            {children.map((child) => (
                <React.Fragment key={child.type.name}>
                    <hr />
                    {child}
                </React.Fragment>
            ))}
        </div>
    );
};

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
                <MasterTempo tempo={tempo} setTempo={setTempo} />
                <SplitWithLines>
                    <BeatsPerSecond tempo={tempo} />
                    <PeriodOfBeat tempo={tempo} />
                    <DelayTime tempo={tempo} />
                    <LengthInSamples tempo={tempo} />
                    <Transpose tempo={tempo} setTempo={setTempo} />
                    <TransposeToTempo tempo={tempo} setTempo={setTempo} />
                </SplitWithLines>
            </section>
        </React.Fragment>
    );
}

export default App;
