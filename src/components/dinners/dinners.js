import DinnerListItem from "./dinnerListItem/dinnerListItem";
import CreateMeetModal from "./createMeetModal/createMeetModal";
import { useState } from 'react';
import { getDateTime } from "../../scripts/dateTimeFunction";

export default function Dinners() {

  const [meets, setMeets] = useState([
    {
      datetime: getDateTime(1, 19, 30),
      restaurant: 'La Cabrera',
      map: 'https://goo.gl/maps/9Zz4Qq3Z2Z2Z2Z2Z2',
      seats: 6,
      name: 'Douglas',
      invitation: 'Lets have some meat together!',
      guests: ['Sven', 'Sally', 'John', 'Jane', 'Johan', 'Leo'],
    },
    {
      datetime: getDateTime(1, 20, 0),
      restaurant: 'La Pescadoria',
      map: 'https://goo.gl/maps/oi029u023u213',
      seats: 5,
      name: 'Sally',
      invitation: 'I love this fish restaurant! Would be awesome to share it with you guys!',
      guests: ['Charlotte', 'Christian', 'Jacob'],
    },
    {
      datetime: getDateTime(2, 19, 30),
      restaurant: 'Burger Joint',
      map: 'https://goo.gl/maps/oi029u023u213',
      seats: 8,
      name: 'John',
      invitation: 'I love this burger place! Would be awesome to share it with you guys!',
      guests: ['Johan', 'Amanda'],
    }
  ]);

  function addMeet(newMeet) {
    newMeet.guests = [];
    newMeet.userCreated = true;
    const newMeetArr = [...meets, newMeet];
    newMeetArr.sort((a, b) => a.datetime - b.datetime);
    setMeets(newMeetArr);
  }

  return (
    <div style={{
      textAlign: 'left',
      // border: '2px solid red',
    }}>
      <p><b>Upcoming food meets in Buenos Aires</b></p>
      <CreateMeetModal addMeet={addMeet} />
      <div style={{
        overflowY: 'scroll', // Enable vertical scrolling
        height: '60vh', // Limit the height 
      }}>
        {meets.map((meet, i) => <DinnerListItem
          meet={meet}
          key={i}
        />)}
      </div>
    </div>
  );
}