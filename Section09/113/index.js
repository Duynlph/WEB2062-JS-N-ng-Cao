const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
};
if(restaurant.openingHours.mon) console.log
console.log(restaurant.openingHours.mon.open);

if(restaurant.openingHours && restaurant.openingHours.mon) console.log
console.log(restaurant.openingHours.mon.open);

// WTH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// VD
const days = ['mon','tue','wed','thu','fri','sat','sun'];

for (const day of days){
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log('On ${day}, we open at ${open}');
}
// Methods
console.log(restaurant.order?.(0,1)?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1)?? 'Method does not exist');

// Arrays
const users =
    [{name: 'Jonas', email: 'hello@jonas.io'}];
    console.log(users[0]?.name ?? 'User array empty');

    if(users.length > 0) console.log(users[0].name);
    else console.log('user array empty');
