/**
 * Created by cristian on 14/10/16.
 */

var Dog = function () {
    animal.apply(this,arguments);
};

Dog.prototype = Object.create(animal.prototype);
Cat.prototype.constructor = Dog;

Dog.prototype.say = function () {
    console.log("Meaw");
};

exports.Dog = Dog;