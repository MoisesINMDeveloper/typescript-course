const withoutEnd = () => {
    while (true) {
        console.log('never stop to learn')
    }
}


const fail = (message:string):never => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string' ) {
        return 'es un string';
    } else if (Array.isArray(input)) {
        return 'es un array';
    }
    return fail('not match');
}
console.log(example('Hello world'));
console.log(example([1,1,1,1]));
console.log(example(12213));//fail detiene
console.log(example('hola despues del fail'));



