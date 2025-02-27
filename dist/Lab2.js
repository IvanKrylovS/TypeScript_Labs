var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function findMinimum(arr) {
    if (arr.length == 0) {
        return null;
    }
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
var numbers = [3.5, 2.1, 5.7, 0.2, 99.8];
var min = findMinimum(numbers);
console.log(numbers);
console.log("\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(min));
function findZero(matrix) {
    if (matrix.length == 0) {
        return null;
    }
    var zeroCount = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}
var matrix = [
    [1, 0, 0],
    [5, 3, 0],
    [0, 2, 3]
];
var zeroCount = findZero(matrix);
console.log(matrix);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0443\u043B\u0435\u0432\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0432 \u043C\u0430\u0440\u0438\u0446\u0435: ".concat(zeroCount));
function concatTupleElems(tuple) {
    return tuple[0] + " " + tuple[1] + tuple[2];
}
var myTuple = ["Hello", "world", "!"];
var res = concatTupleElems(myTuple);
console.log(res);
var Printers;
(function (Printers) {
    Printers["Inkjet"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439";
    Printers["Laser"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439";
    Printers["DotMatrix"] = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439";
    Printers["Thermal"] = "\u0422\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439";
})(Printers || (Printers = {}));
;
var printer = Printers.DotMatrix;
console.log("\u0422\u0438\u043F \u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0430: ".concat(printer));
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function PetInfo(pet) {
    console.log("Name: ".concat(pet.name));
    console.log("Age: ".concat(pet.age));
    console.log("Speak: ".concat(pet.speak()));
}
var myPet = new Pet();
var myDog = new Dog();
var myCat = new Cat();
PetInfo(myPet);
PetInfo(myDog);
PetInfo(myCat);
var typeOfTransport;
(function (typeOfTransport) {
    typeOfTransport["Car"] = "Car";
    typeOfTransport["Motocycle"] = "Motocycle";
    typeOfTransport["Moped"] = "Moped";
})(typeOfTransport || (typeOfTransport = {}));
;
var myTransport1 = {
    name: typeOfTransport.Car,
    fuelType: "95",
    maxSpeed: 180
};
var myTransport2 = {
    name: typeOfTransport.Moped,
    fuelType: "92",
    maxSpeed: 55
};
console.log(JSON.stringify(myTransport1));
console.log(JSON.stringify(myTransport2));
