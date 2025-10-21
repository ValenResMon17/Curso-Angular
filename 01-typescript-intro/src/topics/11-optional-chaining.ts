export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Valentina'
}

const passenger2: Passenger = {
    name: 'Sergio',
    children: ['juan pablo', 'valeria']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren)
}

printChildren (passenger2)