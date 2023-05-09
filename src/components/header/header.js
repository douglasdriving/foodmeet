import Dinners from '../dinners/dinners';

export default function Header() {
  return (
    <div>
      <h1>FoodMeet</h1>
      <p>Eat with others</p>
      <div style={{
        height: '1px',
        backgroundColor: 'white',
        marginBottom: '1rem',
      }}></div>
      <Dinners />
    </div>
  );
}
