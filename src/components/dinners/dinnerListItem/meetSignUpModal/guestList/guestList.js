import React, { useState } from 'react';

export default function GuestList({ guests, seats, currentUser, host }) {


  const [seatsTaken, setSeatsTaken] = useState(guests.slice(0, seats-1));
  const [waitingList, setWaitingList] = useState(guests.slice(seats-1));

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
    paddingLeft: '2.3rem',
    borderRadius: '0.5rem',
    overflow: 'scroll',
    flex: 1,
  };

  return (
    <>

      <h3 style={{ margin: 0 }}>🪑 Guests</h3>

      <ol style={guestListStyle}>

        <li>
          {host} (organizer)
        </li>

        {seatsTaken.map((guest, index) =>
          < li key={index} >
            {guest}
          </li>
        )}

        {emptySeats.map((seat, index) => (
          <li key={index + seatsTaken.length}>
          </li>
        ))}

        {waitingList.map((guest, index) =>
          < li key={index + seatsTaken.length + emptySeats.length} >
            {guest}
          </li>
        )}

      </ol >



      {joined() ?
        <>
          <p>You joined the meet!</p>
          <p>If you can't make it, make sure to leave your seat for someone else up to 3h before the starting time</p>
          <button onClick={leaveSeat} style={leaveButtonStyle}>Leave</button>
        </>
        :
        <button onClick={joinSeat} style={joinButtonStyle}>Join</button>
      }

    </>
  );
}
