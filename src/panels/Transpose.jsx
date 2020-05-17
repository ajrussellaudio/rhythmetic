import React, { useState, useEffect } from 'react';
import transpose from '../utils/transpose';
import Output from '../components/Output';

const Transposing = ({ tempo, setTempo }) => {
    const [semitones, setSemitones] = useState(0);
    const [transposedTempo, setTransposedTempo] = useState(tempo);

    const handleSemitonesChange = (event) => {
        setSemitones(parseInt(event.target.value));
    };

    useEffect(() => {
        setTransposedTempo(transpose(tempo, semitones));
    }, [tempo, semitones]);

    const handleButtonClick = () => {
        setTempo(transposedTempo);
        setSemitones(0);
    };

    return (
        <div className="box">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">transposing by</label>
                </div>
                <div className="field-body">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={semitones}
                                onChange={handleSemitonesChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-static">
                                semitones
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Output
                label="makes the tempo"
                units="bpm"
                value={transposedTempo.toLocaleString(undefined, {
                    maximumFractionDigits: 3,
                })}
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
        </div>
    );
};

export default Transposing;
