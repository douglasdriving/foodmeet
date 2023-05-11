import React, { useState } from 'react';

export default function GuestList({ guests, seats, currentUser }) {
  const [seatsTaken, setSeatsTaken] = useState(guests);

  const takeSeat = () => {
    if (!seatsTaken.includes(currentUser)) {
      setSeatsTaken([...seatsTaken, currentUser]);
    }
  };

  const leaveSeat = () => {
    setSeatsTaken(seatsTaken.filter(guest => guest !== currentUser));
  };

  const emptySeats = Array(seats - seatsTaken.length).fill('Empty seat');

  return (
    <div>
      <h3>🪑 Seats ({seatsTaken.length}/{seats})</h3>
      <ul>
        {seatsTaken.map((guest, index) => (
          <li key={index}>
            {guest} {guest === currentUser && <button onClick={leaveSeat}>Leave seat</button>}
          </li>
        ))}
        {emptySeats.map((seat, index) => (
          <li key={index + seatsTaken.length}>
            {seat} <button onClick={takeSeat}>Take seat</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
