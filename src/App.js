import React, { useState } from 'react';
import TempoInput from './components/TempoInput';
import BeatsPerSecond from './components/BeatsPerSecond';
import PeriodOfBeat from './components/PeriodOfBeat';
import './App.sass';

function App() {
    const [tempo, setTempo] = useState(120);

    return (
        <section className="section">
            <div className="container">
                <TempoInput tempo={tempo} setTempo={setTempo} />
                <BeatsPerSecond tempo={tempo} />
                <PeriodOfBeat tempo={tempo} />
            </div>
        </section>
    );
}

export default App;
