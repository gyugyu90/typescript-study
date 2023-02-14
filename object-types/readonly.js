function doSomething(obj) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
    // But we can't re-assign it.
    // obj.prop = "hello";
}
function visitForBirthday(home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++; // resident.age까지 readonly인 것은 아님
    // 만약 그렇게 하고 싶으면 age에도 readonly를 붙이면 됨
}
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
