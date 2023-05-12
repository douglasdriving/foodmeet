import { useState } from 'react';

export default function CreateMeetForm({ create, username }) {

  const initialFormState = {
    restaurant: '',
    map: '',
    datetime: '',
    seats: '',
    name: username,
    invitation: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formFilled, setFormFilled] = useState(false);
  const [createError, setCreateError] = useState(false);

  function handleChange(e, fieldName) {
    const newFormData = { ...formData, [fieldName]: e.target.value };
    setFormData(newFormData);

    const allFieldsFilled = Object.values(newFormData).every(value => value && value !== '');
    setFormFilled(allFieldsFilled);
    setCreateError(!allFieldsFilled);
  }

  function handleCreatePress() {
    if (!formFilled) {
      setCreateError('Please fill out all the fields first');
      return;
    }

    create(formData);
    setFormData(initialFormState);
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
          value={formData.restaurant}
          onChange={(e) => handleChange(e, 'restaurant')}
        />

        <p className='inputLabel'>Map</p>

        <input
          type="text"
          placeholder='Paste google map link'
          value={formData.map}
          onChange={(e) => handleChange(e, 'map')}
        />

        <p className='inputLabel'>Date & Time</p>
        <input
          type="datetime-local"
          onChange={(e) => handleChange(e, 'datetime')}
          value={formData.datetime}
        />

        <p className='inputLabel'>Seats Reserved</p>
        <select
          value={formData.seats}
          onChange={(e) => handleChange(e, 'seats')}
        >
          <option value="">--Please choose an option--</option>
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) =>
            <option key={value} value={value}>{value}</option>
          )}
        </select>

        <p className='inputLabel'>Reservation Name</p>
        <input
          type="text"
          placeholder='Name on the reservation'
          value={formData.name}
          onChange={(e) => handleChange(e, 'name')}
        />

        <p className='inputLabel'>Invitation</p>
        <textarea
          name="Invitation"
          placeholder={`Write something exciting about the meet!`}
          value={formData.invitation}
          onChange={(e) => handleChange(e, 'invitation')}
        />

      </div>

      <button onClick={handleCreatePress} style={!formFilled ? { opacity: 0.3 } : { opacity: 1 }}>Create</button>
      <p style={{ color: 'red' }}>{createError}</p>

    </>
  );
}