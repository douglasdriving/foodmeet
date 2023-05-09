import DinnerListItem from "./dinnerListItem/dinnerListItem";

export default function Dinners() {

  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

  //get todays day name
  const today = new Date();
  const day = today.getDay();
  const todayName = daylist[day];

  //get name of day after tomorrow
  const dayIn2 = new Date();
  dayIn2.setDate(dayIn2.getDate() + 2);
  const dayIn2Name = daylist[dayIn2.getDay()];

  //and after that
  const dayIn3 = new Date();
  dayIn3.setDate(dayIn3.getDate() + 3);
  const dayIn3Name = daylist[dayIn3.getDay()];


  return (
    <div style={{
      textAlign: 'left',
      // border: '2px solid red',
    }}>
      <p><b>Upcoming dinners in Buenos Aires</b></p>
      <div style={{
        overflowY: 'scroll', // Enable vertical scrolling
        height: '60vh', // Limit the height 
      }}>
        <DinnerListItem
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
        />
      </div>
    </div>
  );
}