//Import-Export
import { type Product, taxCalculation } from './06-function-destructuring';


const shoppingCart: Product[] = [
    { 
        description: 'Xiaomi', 
        price: 150 
    },
    { 
        description: 'iPad', 
        price: 350 
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', total)
console.log('Tax', tax)

