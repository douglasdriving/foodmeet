import { useEffect, useState } from "react";
import { getDateTimeText } from "../../../images/dateTimeFunction";

export default function DinnerListItem({ meet }) {

  const dateString = getDateTimeText(meet.datetime);
  let seatsTaken = meet.guests.length + 1;
  if (seatsTaken > meet.seats) {
    seatsTaken = meet.seats;
  }

  return (
    <div style={{
      // border: '2px solid blue',
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'left',
      padding: '0.5rem',
      marginBottom: '0.5rem',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0.5rem',
    }}>
      <div>
        <b>{meet.restaurant}</b>
        <p style={{ marginBottom: 0 }}>{dateString}</p>
      </div>
      <p style={{ marginBottom: 0 }}>{seatsTaken}/{meet.seats}</p>
    </div>
  );

}