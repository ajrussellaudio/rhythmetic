import React from 'react';
import '../scss/hideOnSmallDevice.scss';
import { inBPM } from '../constants/displayUnits';

const TempoInput = ({ tempo, setTempo, label }) => {
    const handleTempoChange = (newTempo) => {
        setTempo(newTempo);
    };

    const handleInputChange = (event) => {
        handleTempoChange(parseFloat(event.target.value));
    };

    const handleButtonClick = (value) => () => {
        handleTempoChange(tempo + value);
    };

    return (
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label" htmlFor="tempo">
                    {label}
                </label>
            </div>
            <div className="field-body">
                <div className="field has-addons">
                    <div className="control">
                        <button
                            className="button"
                            onClick={handleButtonClick(-1)}
                        >
                            {'<<'}
                        </button>
                    </div>
                    <div className="control">
                        <button
                            className="button"
                            onClick={handleButtonClick(-0.1)}
                        >
                            {'<'}
                        </button>
                    </div>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            id="tempo"
                            value={inBPM(tempo)}
                            step={1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="control hide-on-small-device">
                        <button className="button is-static">bpm</button>
                    </div>
                    <div className="control">
                        <button
                            className="button"
                            onClick={handleButtonClick(0.1)}
                        >
                            {'>'}
                        </button>
                    </div>
                    <div className="control">
                        <button
                            className="button"
                            onClick={handleButtonClick(1)}
                        >
                            {'>>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempoInput;
