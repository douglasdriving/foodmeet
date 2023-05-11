// import { useEffect, useState } from "react";
import { getDateTimeText } from "../../../scripts/dateTimeFunction";
import MeetSignUpModal from "./meetSignUpModal/meetSignUpModal";
import { useState } from "react";

export default function DinnerListItem({ meet, username, addGuest, removeGuest }) {

  const [isOpen, setIsOpen] = useState(false);

  const dateString = getDateTimeText(meet.datetime);
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

  return (
    <>

      <div
        className="dinnerListItem"
        onClick={handleOnClick}
      >
        <div>
          <b>{meet.restaurant}</b>
          <p style={{ marginBottom: 0 }}>{dateString}</p>
        </div>
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