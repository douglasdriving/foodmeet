import React, { useState } from 'react';
import Modal from '../../modal/modal';

export default function CreateMeetForm() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>

      <button onClick={() => setModalOpen(true)}>+ Create</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h1>Create Meet</h1>
        <p>⚠️ Before creating your meet, make sure to reserve a table at the restaurant you want to go to</p>
        {/*Form */}
        <form>
          <label>
            <p class='inputLabel'>Restaurant</p>
            <input type="text" name="restaurant" placeholder='Name of the restaurant'/>
          </label>
          <label>
            <p class='inputLabel'>Date & Time</p>
            <input type="datetime-local" name="datetime" />
          </label>
          <label>
            <p class='inputLabel'>Seats Reserved</p>
            <select>
              <option value="">--Please choose an option--</option>
              {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) =>
                <option key={value} value={value}>{value}</option>
              )}
            </select>
          </label>
          <label>
            <p class='inputLabel'>Reservation Name</p>
            <input type="text" name="name" placeholder='Name on the reservation'/>
          </label>
          <label>
            <p class='inputLabel'>Invitation</p>
            <textarea
              name="Invitation"
              placeholder={`Write something exciting about the meet`}
            />
          </label>
          <button type="submit">Create</button>
        </form>

      </Modal>

    </div >
  );
}
