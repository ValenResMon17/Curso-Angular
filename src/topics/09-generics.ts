

export function whatsMyType<T>(argument: T): T{

    return argument
}

const iAmString = whatsMyType<String>('Hola mundo');
const iAmNumber = whatsMyType<Number>(200)
const iAmArray = whatsMyType<Number[]>([1,2,3,4,5,6])

console.log(iAmString.split(' '))
console.log(iAmNumber)
console.log(iAmArray)


