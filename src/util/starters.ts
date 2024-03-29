import {
  liveStatsRoster,
  liveStatsWRoster,
  roster,
  womenRoster,
} from '../roster';
import {player} from '../types';
import {findPlayer, findSideArmPlayer} from './formatName';

//Determine which of the two starting lineups is the user's team.
//The name given to the team may be different depending on who creates the PDF
//convert the strings into an array of individual players, then determine which
//array contains players found in the roster.

export const findStarters = (
  array: string[],
  men: boolean,
  liveStats: boolean
): player[] => {
  if (!liveStats) {
    //For sideArm Im just going to manually enter the starters on the first line of the play by play
    const players = array[0].split(' ');
    console.log(players)
    return players.map((player) => findSideArmPlayer(player,men));
  } else {
    const checkRoster = men
      ? liveStatsRoster.join(' ')
      : liveStatsWRoster.join(' ');
    const teams = array.map((string) => string.match(/\d+(\s[a-zA-Z]+)+/g));
    const [starters] = teams.filter((starters) => {
      let checker = true;
      starters?.forEach((name) => {
        if (!checkRoster.includes(name)) {
          checker = false;
        }
      });
      return checker;
    });
    if (!starters) {
      throw Error('There was an error loading the starters');
    }
    return starters.map((shortHand) => findPlayer(shortHand, men));
  }
};
