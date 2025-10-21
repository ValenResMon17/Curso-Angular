export interface Product {
    description: String;
    price: number;
}

// const phone: Product = {
//     description: 'Xiaomi',
//     price: 150,
// };

// const tablet: Product = {
//     description: 'iPad',
//     price: 350,
// };

export interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}
// function taxCalculation( options: TaxCalculationsOptions ): [number, number] 
// function taxCalculation( {tax, products}: TaxCalculationsOptions ): [number, number] 
export function taxCalculation( options: TaxCalculationsOptions ): [number, number] {

    const { tax, products } = options;

    let total = 0; 

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];    
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, taxes]= taxCalculation({ 
//     products: shoppingCart, 
//     tax 
// });
