import { faker } from '@faker-js/faker';
import { getPerson  } from './people.js';


function getEmployeeId() {
    const type = faker.random.arrayElement(['C', 'P', 'T']);
    return type + faker.finance.account(5);
}

function getMobile() {
  return faker.phone.phoneNumber('+971-5#-#######');
}

function getEmployee() {

    let person = getPerson(undefined, 'worker');    
    person.eid = getEmployeeId();
    person.mobile = getMobile();
  
    return person;
  }

  export {
    getEmployee,
 }
 