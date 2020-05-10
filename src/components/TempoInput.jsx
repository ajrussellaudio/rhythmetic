import React from 'react';

const TempoInput = ({ tempo, setTempo }) => {
    const handleChange = (event) => {
        setTempo(event.target.value);
    };
    return (
        <div>
            <label htmlFor="tempo">Enter Tempo (BPM)</label>
            <input
                type="number"
                id="tempo"
                value={tempo}
                step={0.1}
                onChange={handleChange}
            />
        </div>
    );
};

export default TempoInput;
