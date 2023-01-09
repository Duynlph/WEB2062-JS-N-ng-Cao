const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
};
// Spead, because on Right sid of =
const arr = [1,2,...3,4];
// Rest, because on Left side of =
const [a,b,...others] =  [1,2,3,4,5];
console.log(a,b,others);
const [pizza, , Risotto, ...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza, Risotto, otherFood);
// object 
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);
// 2) Function
const add = function(...numbers){
    let sum =0;
    for(let i=0;i<numbers.length; i++) sum+=numbers[i];
    console.log(sum);
};
add (2,3)
add (5,3,7,2)
add (8,2,5,6,4,3,3);
const x = [23,5,7];