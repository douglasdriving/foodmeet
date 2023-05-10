import DinnerListItem from "./dinnerListItem/dinnerListItem";
import CreateMeetModal from "./createMeetModal/createMeetModal";
import { useState } from 'react';

export default function Dinners() {

  const [meets, setMeets] = useState([
    {
      datetime: new Date(),
      restaurant: 'La Cabrera',
      map: 'https://goo.gl/maps/9Zz4Qq3Z2Z2Z2Z2Z2',
      seats: 6,
      name: 'Douglas',
      invitation: 'Lets have some meat together!',
    },
    {
      datetime: new Date(),
      restaurant: 'La Pescadoria',
      map: 'https://goo.gl/maps/oi029u023u213',
      seats: 5,
      name: 'Sally',
      invitation: 'I love this fish restaurant! Would be awesome to share it with you guys!',
    },
  ]);

  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

  //get name of day after tomorrow
  const dayIn2 = new Date();
  dayIn2.setDate(dayIn2.getDate() + 2);
  const dayIn2Name = daylist[dayIn2.getDay()];

  //and after that
  const dayIn3 = new Date();
  dayIn3.setDate(dayIn3.getDate() + 3);
  const dayIn3Name = daylist[dayIn3.getDay()];

  function addMeet(info) {
    console.log('added meet to list: ', info);
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
        {meets.map((meet) => <DinnerListItem
          time={meet.datetime.toLocaleDateString()}
          seats={meet.seats}
          restaurant={meet.restaurant}
        />)}
        {/* <DinnerListItem
          time='Tomorrow, 8:30 PM'
          seats='6/6'
          restaurant={'La Cabrera'}
        />
        <DinnerListItem
          time={dayIn2Name + ', 8:00 PM'}
          seats='4/6'
          restaurant={'Harakiri de Una'}
        />
        <DinnerListItem
          time={dayIn2Name + ', 9:00 PM'}
          seats='4/8'
          restaurant={'La Pescadoria'}
        />
        <DinnerListItem
          time={dayIn3Name + ', 8:30 PM'}
          seats='2/5'
          restaurant={'À Nos Amours'}
        /> */}
      </div>
    </div>
  );
}