import { faker } from '@faker-js/faker';
import { getPerson  } from './people.js';


function getEmployeeId() {
    const type = faker.random.arrayElement(['C', 'P', 'T']);
    return type + faker.finance.account(5);
}

function getMobile() {
  return faker.phone.phoneNumber('+971-5#-#######');
}

function getDepartment() {  
  return faker.random.arrayElement(['Adminstration','Finance','Human Resource','Inventory','Logistics','Manufacturing','Procurement'])
}

function getDepartmentSection() {
  return faker.name.jobArea();
}

function getManufacturingSection() {
  
  let assembly = faker.random.arrayElement(['AS1','AS2','AS4','AS5','AS6']);
  let unit = faker.random.arrayElement(['U1','U2','U3','U4','U5','U6','U7','U8']);

  return assembly + ' - '+ unit;
}
function getJoiningDate(dob) {

  let birthYear = dob.getFullYear();
  let workerYear = birthYear + 25;
  let currentYear = new Date().getFullYear();
  let startYear = faker.datatype.number({ min: workerYear, max:  currentYear});
  if(startYear >= currentYear) {
    startYear = currentYear - faker.datatype.number({ min: 1, max:  3});
  }
  let somePastDate = faker.date.past();
  return new Date(startYear, somePastDate.getMonth(), somePastDate.getDate());
}

function getEmployee() {

    let person = getPerson(undefined, 'worker');    
    person.eid = getEmployeeId();
    person.mobile = getMobile();
    person.department = getDepartment();
    person.joinDate = getJoiningDate(person.dob);
    person.jobType = faker.name.jobType();
    person.section = person.department != 'Manufacturing' ? getDepartmentSection() : getManufacturingSection();
    return person;
  }

  export {
    getEmployee,
 }
 