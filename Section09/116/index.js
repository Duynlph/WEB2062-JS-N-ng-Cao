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
const orderSet = new Set(['Pasta','Pizza','Pizza','Risotto']);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

// VD
const staff = ['Waiter','Chef','Manager','Chef'];
const staffUnique = [...new Set(staff)];
console.log[staffUnique];
console.log(new Set(['Waiter','Chef','Manager','Chef']).size
);

console.log(new Set('Jonasschmedtmann').size);