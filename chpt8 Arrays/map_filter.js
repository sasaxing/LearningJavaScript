const cards= [];
for(let suit of ['H','C','D','S'])  //heart, club, diamond, spade
  for(let value=1; value<=13; value++)
    cards.push({suit,value});

//get all cards with value 2
console.log(`==> cards.filter(c => c.value === 2) :`);
console.log(cards.filter(c => c.value === 2));


const suits = {'H': '\u2665','C': '\u2663','D': '\u2666','S': '\u2660'}; // need to be global
const values = {1:'A',11:'J',12:'Q',13:'K'}; //ditto
for(let i=2; i<=10; i++) values[i] = i;
console.log("==> values : ");
console.log(values);

function cardToString(card){
  return suits[card.suit]+values[card.value]
}

console.log(`==> get all cards with value=2:`);
console.log(cards.filter(c => c.value === 2).map(cardToString));
