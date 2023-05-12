import CalendarButton from "../../calendarButton/calendarButton";
import { getDateTimeText } from "../../../../scripts/dateTimeFunction";

export default function CreateMeetConfirmation(props) {

  const { restaurant, datetime, seats, name, invitation, map } = props;
  const datetimeObj = new Date(datetime);

  return (
    <div style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h1>Meet Created!</h1>
      <b>Your meet is now visible and others can sign up for it.</b>

      <div style={{
        textAlign: 'left',
        padding: '1rem',
        borderRadius: '1rem',
        marginTop: '1rem',
        backgroundColor: 'white',
        color: 'black',
        marginBottom: '1rem',
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h3>
        <p>{invitation}</p>
        <p>📅 {getDateTimeText(datetime)}</p>
        <p>👤 {name}</p>
        <p>🪑 {seats} seats</p>
        <p>📍 <a style={{ wordBreak: 'break-all' }} href={map}>{map}</a></p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CalendarButton
          eventTitle={`Meet at ${restaurant}`}
          eventDescription={invitation}
          startDate={datetimeObj}
          endDate={new Date(datetimeObj.getTime() + 3 * 60 * 60 * 1000)}
          googleMapsLink={map}
        />
        <button
          onClick={props.closeModal}
          style={{ backgroundColor: 'gray' }}>
          Close
        </button>
      </div>

    </div>
  );
}