export const getPlayComponents = (play: string) =>{
  const [time,...rest] = play.split(' ')
  const [player] = rest.join(' ').match(/\d+(\s[A-Z]+)+/) || [null]
  const details = player ? play.split(player).pop() : play.split(time).pop()
  return {time, player, details}
}
