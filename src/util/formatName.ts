import {player} from '../types';
import {roster} from '../roster';

//Take the names found in the roster and convert them
//to the form found in the play by play data, which is
// e.g. 5 Smith J

export const formatName = (person: player): string => {
  const array = person.name.split(' ');
  const firstName = array.shift();
  const lastName = array.join(' ');
  return `${person.number} ${lastName} ${firstName}`;
};

//Take the names found in the play by play data and
//convert them back into the player objects found in the roster

export const findPlayer = (shortHand: string): player => {
  //shorthand will be in format of "5 Smith J"
  const array = shortHand.split(' ');
  const number = array.shift();
  const firstName = array.pop();
  const lastName = array.join(' ');
  const player = roster.find(
    (baller) =>
      baller.name.includes(lastName) && baller.number.toFixed(0) === number
  );
  if (!player) {
    throw Error('No player found');
  }
  return player;
};
