const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
};
// Tra ve bat ky du lieu nao
console.log(3|| 'Jonas');
console.log(''|| 'Jonas');
console.log(true|| 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuestst = 23;
const guestsl = restaurant.numGuestst ? restaurant.numGuestst: 10;
console.log(guestsl);

const guest2 = restaurant.numGuestst || 10
console.log(guest2);
console.log('-----And-----');
console.log(0 &&'Jonas');
console.log(7 &&'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza){
    restaurant.orderPizza('mushrooms','spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
 restaurant.numGuestst = 0;
 const guests = restaurant.numGuestst || 10;
 console.log(guests);
// Nullish: null and undefined
 const guestCorrect = restaurant.numGuestst ?? 10;
 console.log(guestCorrect);
