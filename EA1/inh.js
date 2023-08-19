class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`This is a ${this.name}, and it is ${this.age} years old.`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    
    doggy = () => {
        console.log(`This is a ${this.name}, it is ${this.age} years old, and it is a ${this.breed} dog.`);
    }
}

const dog1 = new Dog("acds", 63, "sdakfsa");
dog1.doggy();


