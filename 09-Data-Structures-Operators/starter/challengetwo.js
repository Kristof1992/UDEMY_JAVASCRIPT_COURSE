const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

// Task 1 - Destructuring
const [players1, players2] = game.players;
// console.log(players1, players2);

// Task 2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// Task 3
const allplayers = [...players1, ...players2];
// console.log(allplayers);

// Task 4
const players1Final = [...players1, 'Thiago','Coutinho','Perisic'];
// console.log(players1Final);

// Task 5
// const {odds: {team1, x: draw, team2}} = game;
// console.log(draw, team1, team2);

// Task 6
function printGoals(...players) {
    for(let i=0;i<players.length;i++) {
        // console.log(players[i]);
    }
    // console.log(players.length);
}

printGoals('Davies','Muller','Lewandowski','Kimmich');
printGoals(...game.scored);

// Task 7
// team1 < team2 && console.log('Team 1 is more likely');
// team1 > team2 && console.log('Team 2 is more likely');

// Challenge 2

// Task 1
const {scored} = game;
for(const [i, player] of scored.entries()) {
    console.log(`Goal ${i+1}: ${player}`);
}

// Task 2
// Calculate avg odd
const oddsIterable = Object.values(game.odds);
let sum = 0;
for(const odd of oddsIterable) {
    sum+=odd;
}
const avg = (sum / oddsIterable.length).toFixed(2);
console.log(avg);

// Task 3
for(const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory of ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

// That's how we can access values by using property keys
console.log(game['team1']);

// Task 4
const scorers = {};

// If the property already exists it adds one if not it sets it to 1
for(let scorer of Object.values(game.scored)) {
    scorers[scorer]++ || (scorers[scorer] = 1);
}
console.log(scorers);

