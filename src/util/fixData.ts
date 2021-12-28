const gameDetails =
  /(Official Basketball Play by Play)(.|\n)*?(Officials: .+)/gi;
const header = /(Game Time)(.+)(Score Diff)(.+)/gi;
const gameTime = /\d+:\d+/;
export const fixData = (data: string) => {
  const playArray = data
    .replace(gameDetails, '')
    .replace(header, '')
    .split(/\n/);
  const startersArray = playArray.splice(0, 2);
  let results: string[] = [];
  playArray
    .filter((x) => x !== '')
    .forEach((line) => {
      if(gameTime.test(line)){
        results.push(line)
      }
      else{
        //just concat it to the end of the last thing in the array 
        results[results.length-1] += ` ${line}`
      }
    })
    return {starterData: startersArray, playData: results}
};
