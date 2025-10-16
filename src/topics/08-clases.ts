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
        private address: string
    ) { }
}

const ironman = new Person('Stark', 'New York');

console.log(ironman);