// string, number, boolean...
let x: number = 10

x = 12

console.log(x)

// inferencia x annotation (as duas variáveis a seguir estão tipadas)
let y = 12 // inferencia

let z: number = 12 // annotation

// tipos basicos (tipos sempre em letras minúsculas)
let firstName: string = 'Mateus'
let age: number = 30
const isAdmin: boolean = true

console.log(typeof firstName)

firstName = 'João'

console.log(firstName)

// object 
let myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
console.log(firstName.toUpperCase()) // TS possui autocomplete de funções baseado no tipo da variável
myNumbers.push(5)

console.log(myNumbers)

// tuplas
let myTuple: [number, string, string[]] 

myTuple = [5, 'teste', ['a', 'b']]

// myTuple = [true, false, true] daria erro

// object literals -> (prop: value)
let user: {name: string, age: number} = {
    name: 'Pedro',
    age: 18
}

console.log(user)

console.log(user.age)

// user.job = 'Programador'

// any (aceita qualquer tipagem) (má prática, não deve ser utilizado)
let a: any = 0

a = 'teste'
a = true
a = []

// union type (alternativa ao any)
let id: string | number = '10'

id = 200

// type alias (um tipo personalizado)
type myIdType = string | number

let userId: myIdType = 10
let productId: myIdType = 3478
let shirId: myIdType = 'aaaaaaaaaaaa'

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = 'Pequeno',
    M = 'Médio', 
    G = 'Grande'
}

const camisa = {
    name: 'Camisa gola V',
    size: Size.G
}

console.log(camisa)

// literal types
let teste: 'autenticado' | null

teste = 'autenticado'
teste = null

// funções
function soma(a: number, b: number) {
    return a + b
}

console.log(soma(12, 12))

function sayHello(name: string): string {
    return `Hello ${name}`
}

console.log(sayHello('João'))

function logger(msg: string): void {
    console.log(msg)
}

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`)
        return
    } 
    console.log(`Olá, ${name}`)
}

greeting('José')
greeting('José', 'Sir')

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers))

// narrowing (checagem de tipos)
function doSomething(info: number | boolean): void {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`)
        return
    }
    console.log(`Não foi passado um número`)
}

doSomething(23)
doSomething(true)

// generics
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArrayItems(a1)
showArrayItems(a2)

// classes 
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(): void {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Profissão do usuário é: ${this.role}`)
            return
        }
        console.log('Informação restrita!')
    }
}

const zeca = new User('Zeca', 'Admin', true)

console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)

// interfaces em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand 
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car('Vw', 4)

fusca.showBrand()

// herança 
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar('Audi', 4, 2.8)

console.log(a4)

a4.showBrand()

// decorators 

// constructor decorator
function BaseParameters() {
    return function<T extends {new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name 

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person('Sam')

console.log(sam)

// -----------------------
