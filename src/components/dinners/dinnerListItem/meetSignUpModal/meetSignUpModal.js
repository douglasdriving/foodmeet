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
        <p>👤 Organized by {name}</p>
        <p>📅 {getDateTimeText(datetime)}</p>
        <p>🪑 {seats} seats</p>
        <p>📍 <a style={{ wordBreak: 'break-all', color: 'lightblue' }} href={map}>{map}</a></p>
        
        <GuestList
          guests={[name, 'Jacob', 'Ivan', 'Josefina']}
          seats={seats}
          currentUser='Carlos'
        />

      </div>
    </Modal>
  );
}