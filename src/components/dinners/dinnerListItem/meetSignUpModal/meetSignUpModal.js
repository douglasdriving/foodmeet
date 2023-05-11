import Modal from "../../../modal/modal"
// import ProfileBubble from "../../../profileBubble/profileBubble";
import { getDateTimeText } from "../../../../scripts/dateTimeFunction";
import GuestList from "./guestList/guestList";
import { useEffect } from "react";

export default function MeetSignUpModal({ meet, close }) {

  const { restaurant, datetime, seats, name, invitation, map, guests } = meet;

  // useEffect(() => {
  //   console.log('guests: ', guests);
  // }, [guests]);

  return (
    <Modal isOpen={true} onClose={() => close()}>
      <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h2>
      <p>{invitation}</p>
      <p>📅 {getDateTimeText(datetime)}</p>
      <p>📍 <a style={{ wordBreak: 'break-all', color: 'lightblue' }} href={map}>{map}</a></p>

      <GuestList
        guests={guests}
        seats={seats}
        currentUser='Carlos'
        host={name}
      />

    </Modal>
  );
}