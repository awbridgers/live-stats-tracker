//a function to break each line into its components

export const getPlayComponents = (play: string) =>{
  //special cases, needed for timing
  if(play === 'END OF PERIOD'){
    return {time: '00:00', player:null, details:'END OF PERIOD'}
  }
  else if(play === 'END OF GAME'){
    return {time: '00:00', player:null, details:'END OF GAME'}
  }
  //elsewise, just split the play into time, player, and details
  const [time,...rest] = play.split(' ')
  const [player] = rest.join(' ').match(/\d+(\s[A-Z]+)+/) || [null]
  const details = player ? play.split(player).pop() : play.split(time).pop()
  if(!details){
    throw Error('Play details not found')
  }
  return {time, player, details}
}
