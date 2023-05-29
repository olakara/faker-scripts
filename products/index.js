const { faker } = require('@faker-js/faker');
const fs = require('fs');

let result = [];
for (i = 0; i < 10; i++) {
  let product = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };

  result.push(product);
}

let data = JSON.stringify({ products: result });
fs.writeFileSync('products.json', data);
