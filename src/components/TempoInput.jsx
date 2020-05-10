import React from 'react';

const TempoInput = ({ tempo, setTempo }) => {
    const handleChange = (event) => {
        setTempo(parseFloat(event.target.value));
    };

    const handleButtonClick = (value) => () => setTempo(tempo + value);

    return (
        <section class="section">
            <label className="field-label" htmlFor="tempo">
                Enter Tempo (BPM)
            </label>
            <div className="field has-addons">
                <div className="control">
                    <button
                        class="button is-primary"
                        onClick={handleButtonClick(-1)}
                    >
                        - 1
                    </button>
                </div>
                <div className="control">
                    <button class="button" onClick={handleButtonClick(-0.1)}>
                        - 0.1
                    </button>
                </div>
                <div class="control">
                    <input
                        className="input"
                        type="number"
                        id="tempo"
                        value={tempo.toPrecision(4)}
                        step={0.1}
                        onChange={handleChange}
                    />
                </div>
                <div className="control">
                    <button class="button" onClick={handleButtonClick(0.1)}>
                        + 0.1
                    </button>
                </div>
                <div className="control">
                    <button
                        class="button is-primary"
                        onClick={handleButtonClick(1)}
                    >
                        + 1
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TempoInput;
