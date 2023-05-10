import React, { useState } from 'react';
import Modal from '../../modal/modal';
import CreateMeetForm from './createMeetForm/createMeetForm';
import CreateMeetConfirmation from './createMeetConfirmation/createMeetConfirmation';

export default function CreateMeetModal() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [created, setCreated] = useState(false);

  function onCreate() {
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
            restaurant='Burger Joint'
            datetime={new Date()}
            seats={6}
            name='Sebastian'
            inviation='Hey Everyone! Thought it would be cool to meet up for some burgers and beers. I love this place and its great for socializing'
            maps='https://goo.gl/maps/WaRvtwiWeunDVwfK8'
          />
        }
      </Modal>

    </div >
  );
}
