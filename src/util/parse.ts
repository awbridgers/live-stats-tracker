import {Lineup} from '../roster';
import {player} from '../types';
import {getPlayComponents} from './playComponents';
import {findStarters} from './starters';
import {fixData} from './fixData';
import {formattedRoster} from '../roster';
import {findPlayer} from './formatName';
import { equals } from './lineupEqual';


export const parse = (data: string): Lineup[] => {
  //split the array into individual plays
  //and filter out any non pbp data
  const {starterData, playData} = fixData(data);
  const starters = new Lineup(findStarters(starterData));
  starters.addTime('20:00');
  //keep track of results, current lineup and index
  let currentLineup: player[] = [...starters.players];
  let results: Lineup[] = [{...starters}];
  let currentIndex = 0;
  //parse through each line and extract the data.
  playData.forEach((play) => {
    const {time, player, details} = getPlayComponents(play);
    const teamPlay =
      player &&
      formattedRoster.find((person) => person.toUpperCase().includes(player))
        ? true
        : false;
    if (details.includes('substitution out')) {
      if (teamPlay) {
        //we only care about our teams subs
        const rmIndex = currentLineup.findIndex(
          (x) => x.name === findPlayer(player!).name
        );
        if (rmIndex === -1) {
          throw Error('Something is wrong with the substitutions');
        }
        currentLineup.splice(rmIndex, 1);

        
      }
    }
    else if (details.includes('substitution in')) {
      if (teamPlay) {
        const addPlayer = findPlayer(player!);
        currentLineup.push(addPlayer);
        if(currentLineup.length === 5){
          const outTime = time === '20:00' ? '00:00' : time //for subs that change at the half
          const lineupIndex = results.findIndex(x=>equals(x.players, currentLineup));
          if(lineupIndex === -1){
            //new lineup
            const newLineup = new Lineup(currentLineup)
            newLineup.addTime(time);  //sub in time
            results.push(newLineup);
            results[currentIndex].addTime(outTime) //subOut TIme
            currentIndex = results.length - 1;
          }
          else{
            //the lineup already exists
            results[currentIndex].addTime(outTime)  //subOut Time
            currentIndex = lineupIndex;
            results[lineupIndex].addTime(time)   //sub in time
          }
        }
      }
    }
  });
  //All plays finished, add 0 to the last lineup's time
  results[currentIndex].addTime('00:00')

  return results;
};
