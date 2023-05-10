import React, { useState } from 'react';
import Modal from '../../modal/modal';
import CreateMeetForm from './createMeetForm/createMeetForm';
import CreateMeetConfirmation from './createMeetConfirmation/createMeetConfirmation';

export default function CreateMeetModal() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [created, setCreated] = useState(false);
  const [meetInfo, setMeetInfo] = useState({});

  function onCreate(restaurant, datetime, seats, name, inviation, maps) {
    setMeetInfo({ restaurant, datetime, seats, name, inviation, maps });
    setCreated(true);
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
            inviation={meetInfo.inviation}
            maps={meetInfo.maps}
          />
        }
      </Modal>

    </div >
  );
}
