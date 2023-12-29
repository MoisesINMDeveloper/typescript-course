//Moi =>[M,o,i] =>tring => string[]
//[M,o,i] => Moi => string[] => string


export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: string | string[]): string | string[]{
    if (Array.isArray(input)) {
        return input.join('');//string
    } else {
        return input.split(''); //string[]
    }
}

const rtaArray = parseStr('Moi');
console.log('rtaArray','Moi =>', rtaArray);

const rtaStr = parseStr((['M','o','i']));
console.log('rtaStr',"['M','o','i'] =>", rtaStr);
