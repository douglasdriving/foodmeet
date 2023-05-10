export default function CreateMeetForm({ create }) {
  return (
    <>
      <h1>Create Meet</h1>
      <p>⚠️ Before creating your meet, make sure to reserve a table at the restaurant you want to go to</p>

      <div className='fitForm'>
        <p className='inputLabel'>Restaurant</p>
        <input type="text" name="restaurant" placeholder='Name of the restaurant' />
        <p className='inputLabel'>Map</p>
        <input type="text" name="map" placeholder='Paste google maps link' />
        <p className='inputLabel'>Date & Time</p>
        <input type="datetime-local" name="datetime" />
        <p className='inputLabel'>Seats Reserved</p>
        <select>
          <option value="">--Please choose an option--</option>
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) =>
            <option key={value} value={value}>{value}</option>
          )}
        </select>
        <p className='inputLabel'>Reservation Name</p>
        <input type="text" name="name" placeholder='Name on the reservation' />
        <p className='inputLabel'>Invitation</p>
        <textarea
          name="Invitation"
          placeholder={`Write something exciting about the meet!`}
        />
      </div>

      <button onClick={create}>Create</button>
    </>
  );
}