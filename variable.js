// 1. Use strict
// added in ES 5
// use this for Valina Javascript.

    'use strict';


// 2. Variable, rw(read/write) (변수)
// let (added in ES6)

let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);

let globalName = 'global name';
console.log(globalName);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top)
// has no block scope

age = 4;
var age;


// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:(무조건 변하지 않는 변수)
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive(더이상 작은 단위로 나눠지지 않는 타입), single item: number, string, boolean, null, undefined, symbol
// object(primitive 여러가지로 묶어서 가능), box container
// function, first-class function

const count = 17; // integer(정수)
const size = 17.1; // decimal number(소수점 숫자)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
console.log(ellie);
ellie.age = 21;
console.log(ellie);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

for (let n = 1, n >= 5, n = n + 1) {
    console.log('hello world');
}