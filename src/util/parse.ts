import {Lineup} from '../roster';
import {player} from '../types';
import {getPlayComponents} from './playComponents';
import {findStarters} from './starters';
import {fixData} from './fixData';
import {formattedRoster} from '../roster';
import {findPlayer} from './formatName';
import {equals} from './lineupEqual';

export const parse = (data: string): Lineup[] => {
  //get starter data and pbp data
  const {starterData, playData} = fixData(data);
  const starters = new Lineup(findStarters(starterData));
  starters.addTime('20:00');
  //keep track of results, current lineup and index
  let currentLineup: player[] = [...starters.players];
  let results: Lineup[] = [starters];
  let currentIndex = 0;
  //parse through each line and extract the data.
  playData.forEach((play) => {
    const {time, player, details} = getPlayComponents(play);
    const teamPlay =
      player &&
      formattedRoster.find((person) => person.toUpperCase().includes(player))
        ? true
        : false;
    const made = details.includes('made');
    const paint = details.includes('in the paint');
    const second = details.includes('second chance');
    const fromTO = details.includes('from turnover');
    //START PLAY BY PLAY LINE EVALUATION HERE
    if (player) {
      if (details.includes('substitution')) {
        if (teamPlay) {
          //we only care about our team's substituions
          if (details.includes('substitution out')) {
            //we only care about our teams subs
            const rmIndex = currentLineup.findIndex(
              (x) => x.name === findPlayer(player!).name
            );
            if (rmIndex !== -1) {
              //remove the player
              currentLineup.splice(rmIndex, 1);
            } else {
              throw Error(`Error with substitution at ${time}`);
            }
          } else if (details.includes('substitution in')) {
            const addPlayer = findPlayer(player);
            currentLineup.push(addPlayer);
          }
          //after subbing players in and out, make the lineup
          if (currentLineup.length === 5) {
            const outTime = time === '20:00' ? '00:00' : time; //for subs that change at the half
            const lineupIndex = results.findIndex((x) =>
              equals(x.players, currentLineup)
            );
            if (lineupIndex === -1) {
              //new lineup
              const newLineup = new Lineup(currentLineup);
              newLineup.addTime(time); //sub in time
              results.push(newLineup);
              results[currentIndex].addTime(outTime); //subOut TIme
              currentIndex = results.length - 1;
            } else {
              //the lineup already exists
              results[currentIndex].addTime(outTime); //subOut Time
              currentIndex = lineupIndex;
              results[lineupIndex].addTime(time); //sub in time
            }
          }
        }
      } else if (details.includes('2pt FG')) {
        results[currentIndex].addBasket(
          teamPlay,
          made,
          paint,
          second,
          fromTO,
          '2'
        );
      } else if (details.includes('3pt FG')) {
        results[currentIndex].addBasket(
          teamPlay,
          made,
          false,
          second,
          fromTO,
          '3'
        );
      } else if (details.includes('free throw')) {
        const made = details.includes('made');
        results[currentIndex].addBasket(
          teamPlay,
          made,
          false,
          second,
          fromTO,
          'ft'
        );
      } else if (details.includes('assist')) {
        results[currentIndex].addAssist(teamPlay);
      } else if (details.includes('turnover')) {
        results[currentIndex].addTurnover(teamPlay);
      } else if (details.includes('rebound')) {
        const type = details.includes('defensive') ? 'd' : 'o';
        results[currentIndex].addRebound(teamPlay, type);
      }
    } else {
      //cases where player is null
      if (details === 'OVERTIME') {
        //to make time work accurately, add 0 and 05:00 time to current lineup
        results[currentIndex].addTime(time);
        results[currentIndex].addTime('05:00');
      }
    }
  });
  //All plays finished, add 0 to the last lineup's time
  results[currentIndex].addTime('00:00');
  return results;
};
