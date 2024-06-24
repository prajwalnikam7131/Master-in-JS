
let myHeros = ['thor', 'spiderman'];


let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}


// can we create a global function created ? yes let see the example:

Object.prototype.prajwal = function () {
    console.log(`prajwal is present in all objects`);
}

heroPower.prajwal();

myHeros.prajwal();

// * here 'prajwal' method is global object.