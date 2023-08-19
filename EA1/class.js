class person{
    constructor(age, name , height, gender){
        this.name = name;
        this.age = age;
        this.height =height;
        this.gender=gender;

    }
    greet(){
        console.log(`hello i am a ${this.gender} my name is ${this.name} i am ${this.age} years old `);
    }
}

const person1 = new person(20,"oswin",5.9,"Male");
const person2 = new person(23,"asdd", 6.1,"female")


person1.greet()
person2.greet()