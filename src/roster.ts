import {player} from './types';
import { timeToSeconds } from './util/fixTime';
import { formatName } from './util/formatName';
export class Lineup {
  players: player[];
  time: number[];
  pointsFor: number;
  pointsAgainst: number;
  dRebFor: number;
  dRebAgainst: number;
  oRebFor: number;
  oRebAgainst: number;
  madeTwosFor: number;
  missedTwosFor: number;
  madeTwosAgainst: number;
  missedTwosAgainst: number;
  madeThreesFor = 0;
  madeThreesAgainst: number;
  missedThreesFor: number;
  missedThreesAgainst: number;
  turnoversFor: number;
  turnoversAgainst: number;
  assistsFor: number;
  assistsAgainst: number;
  FTAfor: number;
  FTAagainst: number;

  constructor(players: player[]) {
    this.players = [...players].sort((a,b)=> a.name>b.name ? 1 : a.name < b.name ? -1 : 0 )
    this.pointsFor = 0;
    this.pointsAgainst = 0;
    this.dRebFor = 0;
    this.dRebAgainst = 0;
    this.oRebFor = 0;
    this.oRebAgainst = 0;
    this.madeTwosFor = 0;
    this.missedTwosFor = 0;
    this.madeTwosAgainst = 0;
    this.missedTwosAgainst = 0;
    this.madeThreesFor = 0;
    this.madeThreesAgainst = 0;
    this.missedThreesFor = 0;
    this.missedThreesAgainst = 0;
    this.turnoversFor = 0;
    this.turnoversAgainst = 0;
    this.assistsFor = 0;
    this.assistsAgainst = 0;
    this.FTAfor = 0;
    this.FTAagainst = 0;
    this.time = [];
  }
  addTime = (time: string) =>{
    this.time.push(timeToSeconds(time))
  }
}

export const roster: player[] = [
  {name: 'Jake LaRavia', number: 0},
  {
    name: 'Isaiah Mucius',
    number: 1,
  },
  {name: 'Cameron Hildreth', number: 2},

  {
    name: 'Daivien Williamson',
    number: 4,
  },
  {
    name: 'Carter Whitt',
    number: 11,
  },
  {
    name: 'Dallas Walton',
    number: 13,
  },
  {
    name: 'Khadim Sy',
    number: 20,
  },
  {
    name: 'Lucas Taylor',
    number: 23,
  },
  {
    name: 'Robert McCray',
    number: 25,
  },
  {
    name: 'Alondes Williams',
    number: 31,
  },
  {
    name: 'Matthew Marsh',
    number: 33,
  },
  {
    name: 'RJ Kennah',
    number: 40,
  },
  {
    name: 'Luc Robinson',
    number: 44,
  },
  {
    name: 'Anthony Mathis',
    number: 45,
  },
  {
    name: 'Kevin Dunn',
    number: 51,
  },
  {
    name: 'Grant van Beveren',
    number: 52,
  },
  {
    name: 'Miles Lester',
    number: 55,
  },
  {
    name: 'Tariq Ingraham',
    number: 10,
  },
];

export const formattedRoster:string[] = roster.map((name)=>formatName(name))