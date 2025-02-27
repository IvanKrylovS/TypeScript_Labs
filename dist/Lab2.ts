
function findMinimum(arr: number[]): number | null {
    if (arr.length == 0) {
        return null;
    }

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

const numbers: number[] = [3.5, 2.1, 5.7, 0.2, 99.8];
const min = findMinimum(numbers);
console.log(numbers);
console.log(`Минимальное число: ${min}`);




function findZero(matrix: number[][]): number | null {
    if (matrix.length == 0) {
        return null;
    }
    let zeroCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                zeroCount++;
            }
        }
    }
    return zeroCount;
}
const matrix = [
    [1, 0, 0],
    [5, 3, 0],
    [0, 2, 3]
];
const zeroCount = findZero(matrix);
console.log(matrix);
console.log(`Количество нулевых значений в марице: ${zeroCount}`);




function concatTupleElems(tuple: [string, string, string]): string {
    return tuple[0] + " " + tuple[1] + tuple[2];
}

const myTuple: [string, string, string] = ["Hello", "world", "!"];
const res = concatTupleElems(myTuple);
console.log(res);




enum Printers {Inkjet = "Струйный", Laser = "Лазерный", DotMatrix = "Матричный", Thermal = "Термический"};
const printer: Printers = Printers.DotMatrix;
console.log(`Тип принтера: ${printer}`);




class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish";
    }
}

class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function PetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}

const myPet = new Pet();
const myDog = new Dog();
const myCat = new Cat();

PetInfo(myPet);
PetInfo(myDog);
PetInfo(myCat);




enum typeOfTransport {Car = "Car", Motocycle = "Motocycle", Moped = "Moped"};

interface Transport {
    name: typeOfTransport;
    fuelType: string;
    maxSpeed: number;
}

const myTransport1: Transport = {
    name: typeOfTransport.Car,
    fuelType: "95",
    maxSpeed: 180
};

const myTransport2: Transport = {
    name: typeOfTransport.Moped,
    fuelType: "92",
    maxSpeed: 55
};

console.log(JSON.stringify(myTransport1));
console.log(JSON.stringify(myTransport2));