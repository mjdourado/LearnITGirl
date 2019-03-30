function booleans(firstName) {
    return (person.firstName === "John");
}

let person = [];
person[0] = {firstName: "Sam", lastName: "Smith", Age: 32}
person[1] = {firstName: "Samuel", lastName: "Baker", Age: 32}
person[2] = {firstName: "Bob", lastName: "Baker", Age: 32}
person[3] = {firstName: "John", lastName: "Baker", Age: 32}
person[4] = {firstName: "Jim", lastName: "Baker", Age: 32}
person[5] = {firstName: "John", lastName: "Smith", Age: 32}

for (let i=0; i < person.length; i++) {
    console.log(booleans(person[i]));
}

// not working, needs work, note that booleans receives an object, not
// a property
