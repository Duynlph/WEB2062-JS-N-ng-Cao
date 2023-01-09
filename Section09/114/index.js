const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
};
const properties = Object.keys(openingHours);
console.log(properties);
let openStr='We are open on ${properties.lenghth}day';
for (const day of properties){
   openStr += '$(day),';
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entire = Object.entries(openingHours);
//console.log(entire);
// [key, values]
for(const [key, {open , close}]of entire){
    console.log('On ${key} we open at ${open} and close at ${close}');
}