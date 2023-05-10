import React, { useState } from 'react';
import Modal from '../../modal/modal';
import CreateMeetForm from './createMeetForm/createMeetForm';
import CreateMeetConfirmation from './createMeetConfirmation/createMeetConfirmation';

export default function CreateMeetModal({addMeet}) {

  const [isModalOpen, setModalOpen] = useState(false);
  const [created, setCreated] = useState(false);
  const [meetInfo, setMeetInfo] = useState({});

  function onCreate(info) {
    setMeetInfo(info);
    setCreated(true);
    addMeet(info);
  }

  function closeModal() {
    setCreated(false);
    setModalOpen(false);
  }

  return (
    <div>

      <button onClick={() => setModalOpen(true)}>+ Create</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {!created ?
          <CreateMeetForm create={onCreate} />
          :
          <CreateMeetConfirmation
            restaurant={meetInfo.restaurant}
            datetime={meetInfo.datetime}
            seats={meetInfo.seats}
            name={meetInfo.name}
            invitation={meetInfo.invitation}
            map={meetInfo.map}
            closeModal={closeModal}
          />
        }
      </Modal>

    </div >
  );
}
