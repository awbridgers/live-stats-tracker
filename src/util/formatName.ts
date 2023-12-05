import {player} from '../types';
import {roster, womenRoster} from '../roster';

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
//!NOTE: The names in the Play by Play are in the ALL CAPS

export const findPlayer = (shortHand: string, men: boolean): player => {
  const theRoster = men ? roster : womenRoster
  //shorthand will be in format of "5 Smith J"
  const array = shortHand.split(' ');
  const number = array.shift();
  const firstName = array.pop();
  const lastName = array.join(' ');
  const player = theRoster.find(
    (baller) =>
      baller.name.toLowerCase().includes(lastName.toLowerCase()) &&
      baller.number.toFixed(0) === number
  );
  if (!player) {
    throw Error('No player found');
  }
  return player;
};

//find Player for sideArm play by play data
//this goes from LAST,FIRST => player object
export const findSideArmPlayer = (name: string, men : boolean):player =>{
  const rosterList = men ? roster: womenRoster;
  const [lastName, firstName] = name.split(',');
  const fixedName = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`
  const player = rosterList.find((x)=>fixedName === x.name.toLowerCase());
  if(!player){
    throw Error (`No player ${fixedName} found`)
  }
  return player
}