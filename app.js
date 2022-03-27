import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { getPerson, getFamily } from './people.js';
import { getEmployee } from './employee.js';
import { getProduct } from './products.js';

//console.log(getProduct());
//console.log(getPerson());
console.log(getEmployee());




// create people
// console.log('Creating people...');
// let result = [];
// for (let i = 0; i < 500000; i++) {
//     result.push(getPerson());
// }
// try {
//     console.log('Writing file..');
//     fs.writeFileSync('./people.json', JSON.stringify(result));
//   } catch (err) {
//     console.error(err);
//   }
// console.log('done!')

//create employee
// console.log('Creating Employee...');
// let result = [];
// for (let i = 0; i < 500; i++) {
//     result.push(getEmployee());
// }
// try {
//     console.log('Writing file..');
//     fs.writeFileSync('./employees.json', JSON.stringify(result));
//   } catch (err) {
//     console.error(err);
//   }
// console.log('done!')
