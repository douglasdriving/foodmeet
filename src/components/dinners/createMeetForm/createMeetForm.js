import React, { useState } from 'react';
import Modal from '../../modal/modal';

export default function CreateMeetForm() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>

      <button onClick={() => setModalOpen(true)}>+ Create</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h1>Create Meet</h1>
        <p>⚠️ Before creating your meet, make sure to reserva a table at the restaurant you want to go to</p>
        {/*Form */}
        <form>
          <label>
            <p class='inputLabel'>Restaurant Name</p>
            <input type="text" name="restaurant" />
          </label>

          {/*booking date, select from calendar*/}
          <label>
            <p class='inputLabel'>Date</p>
            <input type="text" name="date" />
          </label>
        

          <label>
            <p class='inputLabel'>Time</p>
            <input type="text" name="time" />
          </label>
          <label>
            <p class='inputLabel'>Seats</p>
            <input type="text" name="seats" />
          </label>
          <label>
            <p class='inputLabel'>Notes</p>
            <input type="text" name="notes" />
          </label>
          <button type="submit">Create</button>
        </form>

      </Modal>

    </div>
  );
}
