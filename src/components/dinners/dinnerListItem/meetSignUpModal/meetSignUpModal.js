import Modal from "../../../modal/modal"
// import ProfileBubble from "../../../profileBubble/profileBubble";
import { getDateTimeText } from "../../../../scripts/dateTimeFunction";
import GuestList from "./guestList/guestList";

export default function MeetSignUpModal({ meet, close }) {

  const { restaurant, datetime, seats, name, invitation, map } = meet;

  return (
    <Modal isOpen={true} onClose={() => close()}>
      <div style={{ padding: '0.5rem' }}>
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h2>
        <p>{invitation}</p>
        <p>📅 {getDateTimeText(datetime)}</p>
        <p>📍 <a style={{ wordBreak: 'break-all', color: 'lightblue' }} href={map}>{map}</a></p>
        
        <GuestList
          guests={['Jacob', 'Ivan', 'Josefina']}
          seats={seats}
          currentUser='Carlos'
          host={name}
        />

      </div>
    </Modal>
  );
}