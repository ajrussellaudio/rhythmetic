import React from 'react';
import periodOfBeat from '../utils/periodOfBeat';

const PeriodOfBeat = ({ tempo }) => (
    <div className="box">
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">each beat lasts</label>
            </div>
            <div className="field-body">
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            readOnly
                            value={(1000 * periodOfBeat(tempo)).toLocaleString(
                                undefined,
                                {
                                    maximumFractionDigits: 1,
                                }
                            )}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-static">
                            milliseconds
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PeriodOfBeat;
