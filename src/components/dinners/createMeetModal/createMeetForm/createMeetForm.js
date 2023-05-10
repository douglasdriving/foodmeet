import { useState } from 'react';

export default function CreateMeetForm({ create }) {

  const [restaurant, setRestaurant] = useState('');
  const [map, setMap] = useState('');
  const [datetime, setDatetime] = useState();
  const [seats, setSeats] = useState();
  const [name, setName] = useState('');
  const [invitation, setInvitation] = useState('');

  const [formFilled, setFormFilled] = useState(false);

  const [createError, setCreateError] = useState(false);

  function formValueChanged(lastValueSet) {

    setCreateError(false);

    if (!lastValueSet || lastValueSet === '') {
      setFormFilled(false);
      return;
    }

    const allFieldsHasValues = (
      restaurant && restaurant !== ''
      && map && map !== ''
      && datetime
      && seats
      && name && name !== ''
      && invitation && invitation !== ''
    );

    if (formFilled !== allFieldsHasValues) {
      setFormFilled(allFieldsHasValues);
    }
  }

  function handleCreatePress() {

    //make sure form is filled out
    if (!formFilled) {
      setCreateError('Please fill out all the fields first');
      return;
    }

    //create meet
    create({ restaurant, map, datetime, seats, name, invitation });

    //reset form
    setRestaurant('');
    setMap('');
    setDatetime();
    setSeats();
    setName('');
    setInvitation('');
    setFormFilled(false);

  }

  return (
    <>
      <h1>Create Meet</h1>
      <p>⚠️ Before creating your meet, make sure to reserve a table at the restaurant you want to go to</p>

      <div className='fitForm'>

        <p className='inputLabel'>Restaurant</p>
        <input
          type="text"
          placeholder='Name of the restaurant'
          onChange={(e) => { setRestaurant(e.target.value); formValueChanged(e.target.value); }}
        />

        <p className='inputLabel'>Map</p>
        <input type="text" placeholder='Paste google map link'
          onChange={(e) => { setMap(e.target.value); formValueChanged(e.target.value); }}
        />

        <p className='inputLabel'>Date & Time</p>
        <input type="datetime-local"
          onChange={(e) => { setDatetime(new Date(e.target.value)); formValueChanged(e.target.value); }}
        />

        <p className='inputLabel'>Seats Reserved</p>
        <select
          onChange={(e) => { setSeats(e.target.value); formValueChanged(e.target.value); }}
        >
          <option value="">--Please choose an option--</option>
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) =>
            <option key={value} value={value}>{value}</option>
          )}
        </select>

        <p className='inputLabel'>Reservation Name</p>
        <input type="text" placeholder='Name on the reservation'
          onChange={(e) => { setName(e.target.value); formValueChanged(e.target.value) }}
        />

        <p className='inputLabel'>Invitation</p>
        <textarea
          name="Invitation"
          placeholder={`Write something exciting about the meet!`}
          onChange={(e) => { setInvitation(e.target.value); formValueChanged(e.target.value) }}
        />

      </div>

      <button onClick={handleCreatePress} style={!formFilled ? { opacity: 0.3 } : { opacity: 1 }}>Create</button>
      <p style={{ color: 'red' }}>{createError}</p>

    </>
  );
}