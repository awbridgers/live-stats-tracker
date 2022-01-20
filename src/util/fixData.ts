//the following are headers found on the livestats header
//at the top of each page, they will be removed from the
//text so that 1 seamless copy/paste can be used

const gameDetails =
  /(Official Basketball Play by Play)(.|\n)*?(Officials: .+)/gi;
const header = /(Game Time)(.+)(Score Diff)(.+)/gi;
const gameTime = /\d+:\d+/;

const keepThese = ['OVERTIME', 'END OF PERIOD'];

//a function to fix the data into an easier format to manipulate
export const fixData = (data: string) => {
  //remove the header data
  const playArray = data
    .replace(gameDetails, '')
    .replace(header, '')
    .split(/\n/);
  const startersArray = playArray.splice(0, 2);
  let results: string[] = [];
  playArray
    .filter((x) => x !== '')
    .forEach((line) => {
      if(gameTime.test(line)||line.includes('END OF')){
        results.push(line)
      }
      else{
        //just concat it to the end of the last thing in the array 
        results[results.length-1] += ` ${line}`
      }
    })
    return {starterData: startersArray, playData: results}
};
