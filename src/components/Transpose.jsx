import React, { useState, useEffect } from 'react';
import transpose from '../utils/transpose';

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
                                class="input"
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
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">makes the tempo</label>
                </div>
                <div className="field-body">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                class="input"
                                type="text"
                                value={transposedTempo.toLocaleString(
                                    undefined,
                                    {
                                        maximumFractionDigits: 3,
                                    }
                                )}
                                readOnly
                            />
                        </div>
                        <div className="control">
                            <button className="button is-static">bpm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="control">
                <button className="button is-dark" onClick={handleButtonClick}>
                    use this tempo
                </button>
            </div>
        </div>
    );
};

export default Transposing;
