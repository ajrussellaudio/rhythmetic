import React from 'react';

const TempoInput = ({ tempo, setTempo }) => {
    const handleChange = (event) => {
        setTempo(parseFloat(event.target.value));
    };

    const handleButtonClick = (value) => () => setTempo(tempo + value);

    return (
        <React.Fragment>
            <label className="field-label" htmlFor="tempo">
                Enter Tempo (BPM)
            </label>
            <div className="field has-addons">
                <div className="control">
                    <button
                        className="button is-primary"
                        onClick={handleButtonClick(-1)}
                    >
                        - 1
                    </button>
                </div>
                <div className="control">
                    <button
                        className="button"
                        onClick={handleButtonClick(-0.1)}
                    >
                        - 0.1
                    </button>
                </div>
                <div className="control">
                    <input
                        className="input"
                        type="number"
                        id="tempo"
                        value={tempo.toPrecision(4)}
                        step={0.1}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div className="control">
                    <button className="button" onClick={handleButtonClick(0.1)}>
                        + 0.1
                    </button>
                </div>
                <div className="control">
                    <button
                        className="button is-primary"
                        onClick={handleButtonClick(1)}
                    >
                        + 1
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TempoInput;
