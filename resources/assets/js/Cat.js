/**
 * Created by cristian on 14/10/16.
 */

var Cat = function () {
    animal.apply(this,arguments);
    //Cat inicialization
};

Cat.prototype = Object.create(animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log("Meaw");
};

exports.Cat = Cat;