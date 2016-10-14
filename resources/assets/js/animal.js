/**
 * Created by cristian on 14/10/16.
 */

var animal = function () {
    if (this.constructor === Animal){
        throw new Error("Can't instantiate abstrqact class");
    }
    //Inicialitzacio de animal.
}

animal.prototype.say = function () {
    throw new Error("Abstract method");
}

animal.prototype.eat = function () {
    console.log("Animal is eating");
}

exports.animal = animal;