import { faker } from '@faker-js/faker';

function getProduct() {

    let product = {
        id: faker.datatype.uuid(),  
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    };

    return product;
}

export {
    getProduct
 }