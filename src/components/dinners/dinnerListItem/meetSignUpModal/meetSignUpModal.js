import Modal from "../../../modal/modal"
import { getDateTimeText } from "../../../../scripts/dateTimeFunction";
import GuestList from "./guestList/guestList";
// import CalendarButton from "../../calendarButton/calendarButton";

export default function MeetSignUpModal({ meet, close, username, addGuest, removeGuest }) {

  const { restaurant, datetime, seats, name, invitation, map, guests } = meet;

  return (
    <Modal isOpen={true} onClose={() => close()} closebutton>

      <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h2>
      <p>{invitation}</p>
      <p>
        📅 {getDateTimeText(datetime) + '  '}
      </p>
      <p>📍 <a style={{ wordBreak: 'break-all', color: 'lightblue' }} href={map}>{map}</a></p>

      <GuestList
        guests={guests}
        seats={seats}
        currentUser={username}
        host={name}
        addGuest={(g) => addGuest(meet.id, g)}
        removeGuest={(g) => { removeGuest(meet.id, g) }}
        meet={meet}
      />

    </Modal>
  );
}