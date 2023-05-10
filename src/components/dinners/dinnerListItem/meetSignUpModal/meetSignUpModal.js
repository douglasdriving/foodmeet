import Modal from "../../../modal/modal"

export default function MeetSignUpModal({ meet, close }) {

  const { restaurant, datetime, seats, name, invitation, map } = meet;
  const datetimeObj = new Date(datetime);
  const date = datetimeObj.toLocaleDateString();
  const time = datetimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <Modal isOpen={true} onClose={() => close()}>
      <div style={{padding: '0.5rem'}}>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h3>
        <p>{invitation}</p>
        <p>📅 {date}</p>
        <p>⏰ {time}</p>
        <p>👤 {name}</p>
        <p>🪑 {seats} seats</p>
        <p>📍 <a style={{ wordBreak: 'break-all', color: 'lightblue' }} href={map}>{map}</a></p>
      </div>
    </Modal>
  );
}