export const createProduct = (
    id: string | number,
    isNew: boolean = false,
    stock: number = 0
) => {
    return {
        id,
        stock,
        isNew
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

const p4 = createProduct('Shoes', true, 4)
console.log(p4);
