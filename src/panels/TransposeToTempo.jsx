import React, { useState } from 'react';
import Output from '../components/Output';
import TempoInput from '../components/TempoInput';
import transposeToTempo from '../utils/transposeToTempo';

const TransposeToTempo = ({ tempo, setTempo }) => {
    const [desiredTempo, setDesiredTempo] = useState(tempo);

    const handleButtonClick = () => {
        setTempo(desiredTempo);
    };

    const semitones = transposeToTempo(tempo, desiredTempo).toLocaleString(
        undefined,
        {
            minimumFractionDigits: 1,
            maximumFractionDigits: 4,
        }
    );

    return (
        <React.Fragment>
            <TempoInput
                tempo={desiredTempo}
                setTempo={setDesiredTempo}
                label="syncs to"
            />
            <Output
                label="when tuned"
                units="semitones"
                value={semitones > 0 ? '+' + semitones : semitones}
            />
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label" />
                </div>
                <div className="field-body">
                    <div className="control">
                        <button
                            className="button is-dark"
                            onClick={handleButtonClick}
                        >
                            use this tempo
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TransposeToTempo;
