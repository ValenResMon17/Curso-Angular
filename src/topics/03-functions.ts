function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

const result1: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 20);
const result3: number = multiplyNumbers(5);

// console.log(`El resultado 1 de la suma es: ${result1}`);
// console.log(`El resultado 2 de la suma es: ${result2}`);
// console.log(`El resultado de la multiplicación es: ${result3}`);

interface Character {
    name: string;
    health: number;
    showHealth: () => void;
}

const heal = (character: Character, amount: number): void => {
    character.health += amount;
}

const strider: Character = {
    name: 'Strider',
    health: 100,
    showHealth() {
        console.log(`Puntos de vida: ${this.health}`);
    }
}

heal(strider, 20);

strider.showHealth();
console.table(strider);


export{};