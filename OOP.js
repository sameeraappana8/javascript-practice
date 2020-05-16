function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object

const person1 = new Person('Sam','Appana', '6-8-1997');

console.log(person1);
console.log(person1.dob.getFullYear());

console.log(person1.getFullName());

//prototypes - used to get rid of functions being displayed in the prototype of the object. that is when you do console.log(person) youw ont get the prototype functions.
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
console.log(person1.getBirthYear());


//Class - same functionality as above but in a prettier way - ES6 classes

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFullYear(){
        return this.dob.getFullYear();
    }

    }
