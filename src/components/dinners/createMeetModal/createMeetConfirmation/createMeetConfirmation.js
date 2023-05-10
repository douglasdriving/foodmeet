export default function CreateMeetConfirmation(props) {

  const { restaurant, datetime, seats, name, inviation, maps } = props;

  //turn datetime into text that displays dae and time
  const date = datetime.toLocaleDateString();
  //turn time to it only displays hours and minutes
  const time = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Meet Created!</h1>
      <b>Your meet is now visible and others can sign up for it.</b>
      <div style={{
        textAlign: 'left',
        border: '2px solid white',
        padding: '1rem',
        borderRadius: '1rem',
        marginTop: '1rem',
      }}>
        <h3>{restaurant}</h3>
        <p>{inviation}</p>
        <p>{date + ' at ' + time}</p>
        <p>{name}, {seats} seats</p>
        <a style={{ wordBreak: 'break-word' }}>{maps}</a>
      </div>
    </div>
  );
}