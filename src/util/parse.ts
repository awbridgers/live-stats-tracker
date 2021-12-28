import { Lineup } from '../roster';
import { player } from '../types';
import { getPlayComponents } from './playComponents';
import { findStarters } from './starters';
import { fixData } from './fixData';


export const parse = (data: string): Lineup[] => {
  //split the array into individual plays
  //and filter out any non pbp data
  const {starterData, playData} = fixData(data)
  const starters = new Lineup(findStarters(starterData));
  console.log(starters)
  starters.addTime('20:00');
  //keep track of results, current lineup and index
  let currentLineup:Lineup = starters;
  let results:Lineup[] = [currentLineup];
  let currentIndex = 0;
  console.log(playData)
  //parse through each line and extract the data.
  // dataArray.forEach((play)=>{
  //   const {time, player, details} = getPlayComponents(play);
  //   console.log(`time: ${time} player: ${player} detail: ${details}`)
  // })
  


  return results
};
