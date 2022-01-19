//a function to break each line into its components

export const getPlayComponents = (play: string) =>{
  //special case, this will be user added to the text box
  if(play === 'OVERTIME'){
    return {time: '00:00', player:null, details:'OVERTIME'}
  }
  const [time,...rest] = play.split(' ')
  const [player] = rest.join(' ').match(/\d+(\s[A-Z]+)+/) || [null]
  const details = player ? play.split(player).pop() : play.split(time).pop()
  if(!details){
    throw Error('Play details not found')
  }
  return {time, player, details}
}
