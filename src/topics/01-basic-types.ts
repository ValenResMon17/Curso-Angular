const name: String = 'Valentina';
let hpPoints: number | 'Full' | boolean = 95;
const isAlive: boolean = true;

hpPoints = 'Full'
hpPoints = true;

console.log({
    name,
    hpPoints,
    isAlive
});

export {};