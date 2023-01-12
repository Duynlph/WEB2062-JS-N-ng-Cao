const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const airline = 'TAP AIR PORTUGAL';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// FIx capotalization in name
const passenger = 'Jonas';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower[0].slice(1);
console.log(passengerCorrect);

// check email
const email = 'hello@duy.io';
const loginEmail = 'hello@duy.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalLizzedEmail = loginEmail.toLowerCase().trim();
console.log(normalLizzedEmail);
console.log(email === normalLizzedEmail);

// replacing 
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',' ,',')
console.log(priceUS);

const accounment = 'ALL passengers come to boarding door 23!';

console.log(accounment.replace('door','gate'));
console.log(accounment.replace(/door/g,'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startWith('Aib'));

if(plane.startsWith('Airbus')&& plane.endsWith('neo')){
    console.log('Part of the New Arirbus family');
}
// Practice exercise 
const checkBaggage = function(item){
    const baggage = item;
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are not allowed on board');
    }else{
        console.log('Welcome aboard');
    }
}
checkBaggage('I have a laptop, some foof and a packet knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');