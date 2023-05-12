import { getDateTime } from '../../scripts/dateTimeFunction';

const existingMeets = [
  {
    id: 0,
    datetime: getDateTime(1, 19, 30),
    restaurant: 'La Cabrera',
    map: 'https://goo.gl/maps/7Avaywtvkm8pLKpG8',
    seats: 6,
    name: 'Carl',
    invitation: `This is supposed to be a really good Parilla. I've never been there, but would love to try it out together!`,
    guests: ['Sven', 'Sally', 'John', 'Jane', 'Johan', 'Leo'],
  },
  {
    id: 1,
    datetime: getDateTime(1, 20, 0),
    restaurant: 'La Pescadoria',
    map: 'https://goo.gl/maps/rW5Lqf4cJZfEqogY9',
    seats: 5,
    name: 'Sally',
    invitation: 'I love this fish restaurant! The food never dissapoint in satisfying my cravings. Would be awesome to share it with you guys!',
    guests: ['Charlotte', 'Christian', 'Jacob'],
  },
  {
    id: 2,
    datetime: getDateTime(2, 19, 30),
    restaurant: 'Burger Joint',
    map: 'https://goo.gl/maps/PigsAt58BxmXueNo9',
    seats: 8,
    name: 'John',
    invitation: 'Hey! This is a pretty casual place with good burgers. Though we could go there to eat and grab some beers :)',
    guests: ['Luke', 'Amanda', 'Jenna'],
  }
]

export default existingMeets;