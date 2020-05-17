import React from 'react';

const Output = ({ label, value, units }) => (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        readOnly
                        value={value}
                    />
                </div>
                <div className="control">
                    <button className="button is-static">{units}</button>
                </div>
            </div>
        </div>
    </div>
);

export default Output;
