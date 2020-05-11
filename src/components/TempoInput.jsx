import React from 'react';

const TempoInput = ({ tempo, setTempo }) => {
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
        <React.Fragment>
            <label className="field-label" htmlFor="tempo">
                a tempo of
            </label>
            <div className="field has-addons">
                <div className="control">
                    <button className="button" onClick={handleButtonClick(-1)}>
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
                        value={tempo.toLocaleString()}
                        step={1}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="control">
                    <button className="button is-static">bpm</button>
                </div>
                <div className="control">
                    <button className="button" onClick={handleButtonClick(0.1)}>
                        {'>'}
                    </button>
                </div>
                <div className="control">
                    <button className="button" onClick={handleButtonClick(1)}>
                        {'>>'}
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TempoInput;
