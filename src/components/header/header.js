import backgroundImage from '../../images/dinner.jpg';

export default function Header() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '100vh', // Specify the height
      width: '100vw', // and the width
      backgroundSize: 'cover', // Cover the entire space of the div
      backgroundRepeat: 'no-repeat', // Do not repeat the image
      backgroundPosition: 'center', // Center the image
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
    }}>

      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        height: '100%',
        padding: '1rem',
      }}>

        <h1>FoodMeet</h1>
        <p>Eat with others</p>

      </div>

    </div>
  );
}
