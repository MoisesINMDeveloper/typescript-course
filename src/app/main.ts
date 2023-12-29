import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts} from './products/product.service';

const randomTags = Array.from({ length: 5 }, () => faker.lorem.word());

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(randomTags),
    price: parseInt(faker.commerce.price()),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId:faker.string.uuid(),
  });
}
console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
})
findProducts({
  stock: 10,
  color: 'red',
  isNew: true,
  tags:['as','assa']
})