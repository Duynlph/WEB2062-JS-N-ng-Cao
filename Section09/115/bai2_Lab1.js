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
//1
for(const [i,players] of game.scored.entries())
console.log('Goal ${i+1}: ${players}');
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3
for(const [team,odd] of Object.entries(game.odds)){
    const teamStr = team ==='x' ? 'draw' : 'Victory $ {game[team]}';
    console.log('Odd of ${teamStr} ${odd}');
}