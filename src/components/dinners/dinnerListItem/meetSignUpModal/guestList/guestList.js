import React, { useState } from 'react';

export default function GuestList({ guests, seats, currentUser, host }) {
  const [seatsTaken, setSeatsTaken] = useState(guests);

  const joined = () => {
    return seatsTaken.includes(currentUser);
  }

  const joinSeat = () => {
    if (joined()) return;
    setSeatsTaken([...seatsTaken, currentUser]);
  };

  const leaveSeat = () => {
    if (!joined()) return;
    setSeatsTaken(seatsTaken.filter(guest => guest !== currentUser));
  };

  const emptySeats = Array(seats - seatsTaken.length - 1).fill('Empty seat');

  const seatStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    height: '2rem',
  };

  const joinButtonStyle = {
    backgroundColor: 'green',
    width: '5rem',
  };

  const leaveButtonStyle = {
    backgroundColor: 'red',
    width: '5rem',
  };

  const guestListStyle = {
    border: '1px solid lightgrey',
    padding: '1rem',
    paddingLeft: '2rem',
    borderRadius: '0.5rem',
  };

  return (
    <div>

      <h3>🪑 Guests</h3>

      <ol style={guestListStyle}>

        <li>
          {host} (organizer)
        </li>

        {seatsTaken.map((guest, index) => (
          <li key={index}>
            {guest}
          </li>
        ))}

        {emptySeats.map((seat, index) => (
          <li key={index + seatsTaken.length}>
          </li>
        ))}

      </ol>

      {joined() ?
        <button onClick={leaveSeat} style={leaveButtonStyle}>Leave</button> :
        <button onClick={joinSeat} style={joinButtonStyle}>Join</button>
      }

    </div>
  );
}
