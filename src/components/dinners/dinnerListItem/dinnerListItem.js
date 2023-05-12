// import { useEffect, useState } from "react";
import { getDateTimeText } from "../../../scripts/dateTimeFunction";
import MeetSignUpModal from "./meetSignUpModal/meetSignUpModal";
import { useState } from "react";

export default function DinnerListItem({ meet, username, addGuest, removeGuest }) {

  const [isOpen, setIsOpen] = useState(false);

  const dateString = getDateTimeText(meet.datetime);

  const joinStatusDivStyle = {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    width: '5rem',
    textAlign: 'center',
  }
  const joinStatusTextStyle = {
    marginBottom: 0,
  }

  let seatsTaken = meet.guests.length + 1;
  if (seatsTaken > meet.seats) {
    seatsTaken = meet.seats;
  }

  function handleOnClick() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function userJoinedStatus() {
    if (meet.name === username) return 'host'
    if (meet.guests.includes(username)) {
      if (meet.guests.indexOf(username) < meet.seats - 1) return 'joined'
      else return 'on waitlist'
    }
    else return '';
  }

  function userJoinedItem() {
    const status = userJoinedStatus();
    let color = 'white';
    if (status === 'joined') color = 'lightgreen';
    else if (status === 'on waitlist') color = 'orange';
    else if (status === 'host') color = 'lightblue';
    return (
      <div style={{ ...joinStatusDivStyle, backgroundColor: color }}>
        <p style={joinStatusTextStyle}>{status}</p>
      </div>
    )
  }

  return (
    <>

      <div
        className="dinnerListItem"
        onClick={handleOnClick}
      >
        <div style={{ textAlign: 'left' }}>
          <b>{meet.restaurant}</b>
          <p style={{ marginBottom: 0 }}>{dateString}</p>
        </div>
        {userJoinedItem()}
        <p style={{ marginBottom: 0, color: (seatsTaken === meet.seats ? 'red' : 'black') }}>{seatsTaken}/{meet.seats}</p>
      </div>

      {isOpen &&
        <MeetSignUpModal
          meet={meet}
          close={closeModal}
          username={username}
          addGuest={addGuest}
          removeGuest={removeGuest}
        />
      }

    </>
  );

}