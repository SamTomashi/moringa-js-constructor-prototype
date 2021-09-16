class Robot{
    constructor(name, gender, year){
        this.name = name;
        this.gender = gender;
        this.year = year;
    }

    walk(pointA, pointB){
        return `I am walking from ${pointA} to ${pointB}`;
    }
}

// function Person(name, gender, age){
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
// }

// let sam = new Person("Sam", "M", 25);
// let siri = new Robot("Siri", "F", 4)

// console.log(siri.walk("-12339,4773", "468,7979"))

// const phrase = "I am amazing!"

// console.log(phrase.toUpperCase());

// String.prototype.AddExclamation = function(){
//     return `${this}!!!!`;
// }

// console.log(phrase.AddExclamation())

// Robot.prototype.nameAndGender = function(){
//     return `${this.name} ${this.age}`
// }

// const siri = new Robot("Siri", "F", 23)
// const nameAndGender = siri.nameAndGender()

// console.log(nameAndGender)


// Robot.prototype.calculateAge = function(){
//     const currentyear = new Date().getFullYear();
//     return currentyear - this.year;
// }


// const siri = new Robot("Siri", "F", 2000)

// console.log(siri.calculateAge())

const startYear = 2000;

Number.prototype.calculateAge = function(endYear){
    return endYear - this;
}

console.log(startYear.calculateAge(2010))

