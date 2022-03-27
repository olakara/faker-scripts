import { faker } from '@faker-js/faker';


function getBirthDate(type) {
  let year = 2022;
  switch(type) {
    case 'baby':
      year = faker.datatype.number({ min: 0, max: 5 });
      break;
    case 'child': 
      year = faker.datatype.number({ min: 5, max: 18 });
      break;
    case 'young':
      year = faker.datatype.number({ min: 19, max: 28 });
      break;
    case 'worker':
      year = faker.datatype.number({ min: 22, max: 59 });
      break;
    case 'old':
      year = faker.datatype.number({ min: 55, max: 79 });
      break;
    default:
      year = faker.datatype.number({ min: 0, max: 79 });
      break;
  }  
  let birthYear = 2022 - year;
  let somePastDate = faker.date.past();
  return new Date(birthYear, somePastDate.getMonth(), somePastDate.getDate());
}

function getGender() {
  var gender = faker.datatype.number({ min: 0, max: 1 })
  return gender ? 'male' : 'female';
}

function getYesOrNo() {
  const yesOrNo = faker.datatype.number({ min: 0, max: 1 });
  return yesOrNo ? true: false;
}

function getName(gender) {
  let isMiddleNeeded = getYesOrNo();
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const middleName = isMiddleNeeded ? faker.name.middleName(gender).toUpperCase() : null;

  return {
    firstName,
    lastName,
    middleName
  }
  
}

function getSSN(dob) {
    const year = dob.getFullYear();
    return (
      '392-' +
      year +
      '-' +
      faker.finance.account(6) +
      '-' +
      faker.finance.account(1)
    );
  }


function getEmployeeId() {
    const type = faker.random.arrayElement(['C', 'P', 'T']);
    return type + faker.finance.account(5);
}

function getPerson() {

  let person = {
    id: faker.datatype.uuid(),  
    gender: getGender()
  };
  let type = faker.random.arrayElement(['baby', 'child', 'young','worker','old'])
  let name = getName(person.gender);
  let dob = getBirthDate(type);
  let ssn = getSSN(dob);
  person = { ...person,
      firstName: name.firstName,
      lastName: name.lastName,
      middleName: name.middleName,
      dob,
      ssn
  };
  
  return person;
}

function getEmployee() {

  let person = getPerson();
  person.dob = getBirthDate('worker');
  person.eid = getEmployeeId()

  return person;
}

function getFamily() {

  
}



export {
   getPerson,
   getEmployee
}

