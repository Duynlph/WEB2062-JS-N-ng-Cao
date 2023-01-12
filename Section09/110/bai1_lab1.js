const game ={
    team1: 'Bayern',
    team2:'Dortmund',
    players: [
        [
            'Neur',
            'Pavard',
            'Alaba',
            'Martinez',
            'Muller',
            'Coman'
        ],
        [
            'Burki',
            'Schulz',
            'Hakimi',
            'Weigl',
            'Reus',
            'Sancho',
        ],
    ],
    score: '4:0',
    scored: ['Alaba','Coman','Coman','Muller'],
    date: 'Nov 9th, 2017',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1
const [players1, players2] = game.players;
console.log(players1, players2);

//2 
const [gk, fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago','Cotinho', 'Perisic'];
//5
const {
    odds: {team1, x: draw, team2},
} = game;
console.log(team1, draw,team2);
//6
const printGoal = function(...players){
    console.log(`${players.lenghth} goal were scored`);
};
printGoal('Davies','Muller','Coman');
printGoal('Davies','Muller');
printGoal(...game.scored);
//7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);