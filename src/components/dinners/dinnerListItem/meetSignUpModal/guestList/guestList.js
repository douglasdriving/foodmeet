import React, { useState } from 'react';
import CalendarButton from '../../../calendarButton/calendarButton';

export default function GuestList(props) {

  const { currentUser, addGuest, removeGuest, meet } = props;
  const { guests, seats, name: host, } = meet;

  const [seatsTaken, setSeatsTaken] = useState(guests.slice(0, seats - 1));
  const [waitlist, setWaitList] = useState(guests.slice(seats - 1));

  const joined = () => {
    return seatsTaken.includes(currentUser) || waitlist.includes(currentUser);
  }

  const joinSeat = () => {
    if (joined()) return;
    if (seatsTaken.length < seats - 1) {
      setSeatsTaken([...seatsTaken, currentUser]);
    } else {
      setWaitList([...waitlist, currentUser]);
    }
    addGuest(currentUser);
  };

  const leaveSeat = () => {
    if (!joined()) return;
    if (seatsTaken.includes(currentUser)) {
      setSeatsTaken(seatsTaken.filter(guest => guest !== currentUser))
    } else {
      setWaitList(waitlist.filter(guest => guest !== currentUser))
    }
    removeGuest(currentUser);
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

  const guestListWindowStyle = {
    border: '1px solid lightgrey',
    padding: '1rem',
    // paddingLeft: '2.3rem',
    borderRadius: '0.5rem',
    overflow: 'scroll',
    flex: 1,
    margintop: '0.5rem',
    marginBottom: '0.5rem',
  };

  const guestListStyle = {
    paddingLeft: '2rem',
  };

  return (
    <>
      <div style={guestListWindowStyle}>

        <b style={{ margin: 0 }}>Joined</b>

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
        </ol >

        {waitlist.length > 0 &&
          <>
            <b style={{ margin: 0 }}>Waitlist</b>

            <ol style={guestListStyle}>
              {waitlist.map((guest, index) =>
                < li key={index + seatsTaken.length + emptySeats.length} >
                  {guest}
                </li>
              )}
              <li></li>
              <li></li>
            </ol >
          </>
        }


      </div>



      {joined() ?
        <>
          {
            seatsTaken.includes(currentUser) ?
              <p>You have a seat!</p>
              :
              <p>
                You are on the waitlist!
                You will be notified via email if a spot opens up for you
              </p>
          }
          <p>
            If you can't make it,
            make sure to leave your seat for someone else
            at least 3h before the starting time
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={leaveSeat} style={leaveButtonStyle}>Leave</button>
            <CalendarButton
              eventTitle={`Meet at ${meet.restaurant}`}
              eventDescription={meet.invitation}
              startDate={meet.datetime}
              endDate={new Date(new Date(meet.datetime).getTime() + 2 * 60 * 60 * 1000)}
              googleMapsLink={meet.map}
            />
          </div>
        </>
        :
        <button onClick={joinSeat} style={joinButtonStyle}>Join</button>
      }

    </>
  );
}
