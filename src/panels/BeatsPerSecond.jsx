import React from 'react';
import beatsPerSecond from '../utils/beatsPerSecond';

const BeatsPerSecond = ({ tempo }) => (
    <div className="box">
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">is equal to</label>
            </div>
            <div className="field-body">
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            readOnly
                            value={beatsPerSecond(tempo).toLocaleString(
                                undefined,
                                {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 5,
                                }
                            )}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-static">
                            Hz (beats per second)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BeatsPerSecond;
