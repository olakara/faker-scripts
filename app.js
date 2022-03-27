import * as fs from 'fs';
import { faker } from '@faker-js/faker';
import { getPerson, getFamily } from './people.js';
import { getEmployee } from './employee.js';


//console.log(getPerson());
//console.log(getEmployee());
//console.log(getFamily());



// create people
console.log('Creating people...');
let result = [];
for (let i = 0; i < 500000; i++) {
    result.push(getPerson());
}
try {
    console.log('Writing file..');
    fs.writeFileSync('./people.json', JSON.stringify(result));
  } catch (err) {
    console.error(err);
  }
console.log('done!')


