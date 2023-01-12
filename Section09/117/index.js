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
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2,'Lisbon, Portugal'));

rest.set('categories',['Italian','Pizzeria','Vegetarian','Organic']).set('open',11).set('close',23)
.set(true, "We are open") .set(false,'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'))

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const array = [1,2];
rest.set(array, 'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(array));
