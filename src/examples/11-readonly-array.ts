const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(9);
numbers.pop();
numbers.unshift(1);

//Evita que podamos hacer algun metodo de mutacion a un array pero si poder usar filter reduce map
const numbers1: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers1.push(9);
// numbers1.pop();
// numbers1.unshift(1);
numbers1.filter(() => {})
numbers1.reduce(() => 0)
numbers1.map(() => 0)