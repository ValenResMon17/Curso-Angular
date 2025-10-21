// export class Person {
//     public name: string
//     private address: string

//     constructor(name: string, address: string) {
//         this.name = name;
//         this.address = address;
//     }
// }

export class Person {

    constructor(
        public name: string, 
        public lastname: string,
        private address?: string
    ) { }
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}

const person = new Person('Tony', 'Stark', 'Nueva York');

const ironman = new Hero('Stark', 45, 'Tony', person);

console.log(ironman);