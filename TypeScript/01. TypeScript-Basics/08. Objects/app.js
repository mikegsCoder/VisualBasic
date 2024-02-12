// ---------- objects ----------
var person1 = { name: 'Tom', age: 34 };
console.log(person1.name);
console.log(person1['name']);
// ---------- objects example ----------
var person2 = { name: 'John', age: 35 };
console.log(person2.name); // John
// ---------- optional properties ----------
var person3;
person3 = { name: 'Tom', age: 23 };
console.log(person3.name); // Tom
person3 = { name: 'Bob' };
console.log(person3.name); // Bob
console.log(person3.age); // undefined
// ---------- objects in functions ----------
function printUser(user) {
    console.log("name: ".concat(user.name, "  age: ").concat(user.age));
}
var tom = { age: 36, name: 'Tom' };
printUser(tom);
var bob = { name: 'Bob', age: 44, isMarried: true };
printUser(bob);
// ---------- objects as return type ----------
function defaultUser() {
    return { name: 'Tom', age: 37 };
}
var user = defaultUser();
console.log("name: ".concat(user.name, "  age: ").concat(user.age));
// ---------- operator in ----------
var user1 = { name: 'Tom', age: 23 };
var user2 = { name: 'Bob' };
function printUser1(user) {
    if ('age' in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
printUser1(user1);
printUser1(user2);
// ---------- object decomposition ----------
function printUser2(_a) {
    var name = _a.name, age = _a.age;
    console.log("name: ".concat(name, "  age: ").concat(age));
}
var user3 = { name: 'Tom', age: 36 };
printUser2(user3);
// ---------- object decomposition and optional properties ----------
function printUser3(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("name: ".concat(name, "  age: ").concat(age));
    }
    else {
        console.log("name: ".concat(name));
    }
}
printUser3(user1); // name: Tom  age: 23
printUser3(user2); // name: Bob
// ---------- object decomposition with optional properties and default value ----------
function printUser4(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 34 : _b;
    console.log("name: ".concat(name, "  age: ").concat(age));
}
printUser4(user1); // name: Tom  age: 23
printUser4(user2); // name: Bob  age: 34
