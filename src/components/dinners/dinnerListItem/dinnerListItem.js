export default function DinnerListItem({
  restaurant,
  time,
  seats
}) {

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
        <b>{restaurant}</b>
        <p style={{ marginBottom: 0 }}>{time}</p>
      </div>
      <p style={{ marginBottom: 0 }}>{seats}</p>
    </div>
  );

}