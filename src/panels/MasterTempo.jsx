import React, { useState } from 'react';
import TempoInput from '../components/TempoInput';
import TapTempoModal from './TapTempoModal';

const MasterTempo = ({ tempo, setTempo }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <React.Fragment>
            <TempoInput tempo={tempo} setTempo={setTempo} label="a tempo of" />
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label" />
                </div>
                <div className="field-body">
                    <div className="control">
                        <button className="button is-dark" onClick={openModal}>
                            open tap tempo
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <TapTempoModal close={closeModal} setTempo={setTempo} />
            )}
        </React.Fragment>
    );
};

export default MasterTempo;
