const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23,Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
};
const reslt ={
    name: 'Capri',
    numGuests: 20,
};
const reslt2 ={
    name: 'La Pizza',
    owner: 'Giovanni Rossi',
};
reslt2.numGuests = reslt2.numGuests || 10;
reslt.numGuests = reslt.numGuests || 10;

console.log(reslt);
console.log(reslt2);

reslt.numGuests ||=10;
reslt2.numGuests2 ||=10;
 reslt2.owner = reslt2.owner && '<Anonymous>';
 reslt.owner = reslt.owner && '<Anonymous>';