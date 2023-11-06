import { format } from 'path';
import {player} from './types';
import {timeToSeconds} from './util/fixTime';
import {formatName} from './util/formatName';

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
  madeThreesFor: number;
  madeThreesAgainst: number;
  missedThreesFor: number;
  missedThreesAgainst: number;
  turnoversFor: number;
  turnoversAgainst: number;
  assistsFor: number;
  assistsAgainst: number;
  FTAfor: number;
  FTAagainst: number;
  paintPointsFor: number;
  paintPointsAgainst: number;
  pointsFromTOFor: number;
  pointsFromTOAgainst: number;
  secondChanceFor: number;
  secondChanceAgainst: number;
  constructor(players: player[]) {
    this.players = [...players].sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
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
    this.paintPointsFor = 0;
    this.paintPointsAgainst = 0;
    this.secondChanceFor = 0;
    this.secondChanceAgainst = 0;
    this.pointsFromTOFor = 0;
    this.pointsFromTOAgainst = 0;
    this.turnoversFor = 0;
    this.turnoversAgainst = 0;
    this.assistsFor = 0;
    this.assistsAgainst = 0;
    this.FTAfor = 0;
    this.FTAagainst = 0;
    this.time = [];
  }
  addTime = (time: string) => {
    this.time.push(timeToSeconds(time));
  };
  addBasket = (
    teamPlay: boolean,
    made: boolean,
    paint: boolean,
    second: boolean,
    fromTO: boolean,
    type: '2' | '3' | 'ft'
  ) => {
    if (type === 'ft') {
      if (teamPlay) {
        this.FTAfor += 1;
        this.pointsFor += made ? 1 : 0;
      } else {
        this.FTAagainst += 1;
        this.pointsAgainst += made ? 1 : 0;
      }
    } else if (type === '2') {
      if (teamPlay) {
        if (made) {
          this.pointsFor += 2;
          this.madeTwosFor += 1;
          this.paintPointsFor += paint ? 2 : 0;
          this.pointsFromTOFor += fromTO ? 2 : 0;
          this.secondChanceFor += second ? 2 : 0;
        } else {
          this.missedTwosFor += 1;
        }
      } else {
        if (made) {
          this.pointsAgainst += 2;
          this.madeTwosAgainst += 1;
          this.paintPointsAgainst += paint ? 2 : 0;
          this.pointsFromTOAgainst += fromTO ? 2 : 0;
          this.secondChanceAgainst += second ? 2 : 0;
        } else {
          this.missedTwosAgainst += 1;
        }
      }
    } else if (type === '3') {
      if (teamPlay) {
        if (made) {
          this.pointsFor += 3;
          this.madeThreesFor += 1;
          this.secondChanceFor += second ? 3 : 0;
          this.pointsFromTOFor += fromTO ? 3 : 0;
        } else {
          this.missedThreesFor += 1;
        }
      } else {
        if (made) {
          this.pointsAgainst += 3;
          this.madeThreesAgainst += 1;
          this.secondChanceAgainst += second ? 3 : 0;
          this.pointsFromTOAgainst += fromTO ? 3 : 0;
        } else {
          this.missedThreesAgainst += 1;
        }
      }
    }
  };
  addRebound = (teamPlay: boolean, type: 'd' | 'o') => {
    if (type === 'o') {
      const key = teamPlay ? 'oRebFor' : 'oRebAgainst';
      this[key] += 1;
    } else {
      const key = teamPlay ? 'dRebFor' : 'dRebAgainst';
      this[key] += 1;
    }
  };
  addTurnover = (teamPlay: boolean) => {
    const key = teamPlay ? 'turnoversFor' : 'turnoversAgainst';
    this[key] += 1;
  };
  addAssist = (teamPlay: boolean) => {
    const key = teamPlay ? 'assistsFor' : 'assistsAgainst';
    this[key] += 1;
  };
  report = () => {
    console.log(this);
  };
}

export const roster: player[] = [
  {name: 'Kevin Miller', number: 0},
  {
    name: 'Marqus Marion',
    number: 1,
  },
  {name: 'Cameron Hildreth', number: 2},

  {
    name: 'Efton Reid III',
    number: 4,
  },
  {
    name: 'Abramo Canka',
    number: 10,
  },
  {
    name: 'Andrew Carr',
    number: 11,
  },
  {
    name: 'Aaron Clark',
    number: 13,
  },
  {
    name: 'Parker Friedrichsen',
    number: 20,
  },
  {
    name: 'Hunter Sallis',
    number: 23,
  },
  {
    name: 'Zach Keller',
    number: 25,
  },
  {
    name: 'Damari Monsanto',
    number: 30,
  },
  {
    name: 'Jao Ituka',
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
    name: 'Vincent Ricchiuti',
    number: 45,
  },
  {
    name: 'Kevin Dunn',
    number: 51,
  },
  {
    name: 'Will Underwood',
    number: 52,
  },
  {
    name: 'Owen Kmety',
    number: 55,
  },
];

export const womenRoster: player[] = [
  {name: 'Alyssa Andrews', number: 0},
  {name: 'Makaela Quimby', number: 1},
  {name: 'Kaia Harrison', number: 2},
  {name: 'Aliah McWhorter', number: 4},
  {name: 'Malaya Cowles', number: 5},
  {name: 'Raegyn Conley', number: 11},
  {name: 'Kate Deeble', number: 12},
  {name: 'Rylie Theuerkauf', number: 14},
  {name: 'Elise Williams', number: 21},
  {name: 'Madisyn Jordan', number: 22},
  {name: 'Demeara Hinds', number: 25},
  {name: 'Alexandria Scruggs', number: 32},
];

export const formattedRoster: string[] = roster.map((name) => formatName(name));
export const formattedWRoster : string[] = womenRoster.map((name)=>formatName(name));
