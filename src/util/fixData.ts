//the following are headers found on the livestats header
//at the top of each page, they will be removed from the
//text so that 1 seamless copy/paste can be used



const gameDetails =
  /(Official Basketball Play by Play)(.|\n)*?(Officials:.*)/gi;
const header = /(Game Time)(.+)(Score Diff)(.+)/gi;
const gameTime = /\d+:\d+/;
const hasPlayer = /[A-Z][A-Z. -]+,[A-Z.-]+/

const keepThese = ['OVERTIME', 'END OF PERIOD'];

//a function to fix the data into an easier format to manipulate
export const fixData = (data: string, liveStats: boolean) => {
  //if the playXplay coems from sideArm, I am going to manually enter just the Wake starters
  //because this is rarely used and so it doesn't need to be the most efficient system
  //if SideArm, only keep the first row as starter data.
  const starterLength = liveStats ? 2 : 1;
  //remove the header data
  const playArray = data
    .replace(gameDetails, '')
    .replace(header, '')
    .split(/\n/);
  //console.log(playArray);
  const startersArray = playArray.splice(0, starterLength);
  let results: string[] = [];
  let previous = '';
  playArray
    .filter((x) => x !== '')
    .forEach((line, index) => {
      if (
        gameTime.test(line) ||
        line.includes('END OF') ||
        (!liveStats && line.includes('--'))
      ) {
        results.push(previous ? `${previous} ${line}` : line);
        previous = '';
      } else {
        //livestats starts with the time, sideArm has the time in the middle;
        if (liveStats) {
          //just concat it to the end of the last thing in the array
          results[results.length - 1] += ` ${line}`;
        } else {
          /* 
          sideArm has time in the middle so multiline details can be on either side of the time
          so we'll check if the current line has a player and if the previous line has a player
          since each line can only contain 1 player. 
          */
          if(hasPlayer.test(line) && hasPlayer.test(playArray[index-1]))previous = line;
          else{
            results[results.length - 1] += ` ${line}`
          }
        }
      }
    });
  return {starterData: startersArray, playData: results};
};
