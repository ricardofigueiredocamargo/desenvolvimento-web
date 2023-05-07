"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let firstName = 'Mateus';
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'João';
console.log(firstName);
let myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
const user = {
    name: 'Pedro',
    age: 18
};
console.log(user);
console.log(user.age);
let a = 0;
a = 'teste';
a = true;
a = [];
let id = '10';
id = 200;
let userId = 10;
let productId = 3478;
let shirId = 'aaaaaaaaaaaa';
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa gola V',
    size: Size.G
};
console.log(camisa);
let teste;
teste = 'autenticado';
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 12));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello('João'));
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
        return;
    }
    console.log(`Olá, ${name}`);
}
greeting('José');
greeting('José', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado um número`);
}
doSomething(23);
doSomething(true);
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Profissão do usuário é: ${this.role}`);
            return;
        }
        console.log('Informação restrita!');
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car('Vw', 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.8);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
