import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

export default function CreateMeetConfirmation(props) {

  const { restaurant, datetime, seats, name, invitation, map } = props;

  //turn datetime into text that displays dae and time
  const datetimeObj = new Date(datetime);
  const date = datetimeObj.toLocaleDateString();
  const time = datetimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Meet Created!</h1>
      <b>Your meet is now visible and others can sign up for it.</b>

      <div style={{
        textAlign: 'left',
        // border: '2px solid white',
        padding: '1rem',
        borderRadius: '1rem',
        marginTop: '1rem',
        backgroundColor: 'white',
        color: 'black',
      }}>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Meet at {restaurant}</h3>
        <p>{invitation}</p>
        <p>📅 {date}</p>
        <p>⏰ {time}</p>
        <p>👤 {name}</p>
        <p>🪑 {seats} seats</p>
        <p>📍 <a style={{ wordBreak: 'break-all' }} href={map}>{map}</a></p>
      </div>

    </div>
  );
}