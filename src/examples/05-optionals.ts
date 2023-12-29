export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number
) => {
    return {
        id,
        stock: stock ?? 0,
        isNew: isNew ?? false
    }
}

// 0 === false
// '' === false
//false === false

const p1 = createProduct('Shoes', true, 12)
console.log(p1);

const p2 = createProduct('Shoes')
console.log(p2);

const p3 = createProduct('Shoes', false, 0)
console.log(p3);
