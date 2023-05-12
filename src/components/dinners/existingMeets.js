import { getDateTime } from '../../scripts/dateTimeFunction';

const existingMeets = [
  {
    id: 0,
    datetime: getDateTime(1, 19, 30),
    restaurant: 'La Cabrera',
    map: 'https://goo.gl/maps/7Avaywtvkm8pLKpG8',
    seats: 6,
    name: 'Douglas',
    invitation: 'Lets have some meat together!',
    guests: ['Sven', 'Sally', 'John', 'Jane', 'Johan', 'Leo'],
  },
  {
    id: 1,
    datetime: getDateTime(1, 20, 0),
    restaurant: 'La Pescadoria',
    map: 'https://goo.gl/maps/rW5Lqf4cJZfEqogY9',
    seats: 5,
    name: 'Sally',
    invitation: 'I love this fish restaurant! Would be awesome to share it with you guys!',
    guests: ['Charlotte', 'Christian', 'Jacob'],
  },
  {
    id: 2,
    datetime: getDateTime(2, 19, 30),
    restaurant: 'Burger Joint',
    map: 'https://goo.gl/maps/PigsAt58BxmXueNo9',
    seats: 8,
    name: 'John',
    invitation: 'I love this burger place! Would be awesome to share it with you guys!',
    guests: ['Johan', 'Amanda'],
  }
]

export default existingMeets;