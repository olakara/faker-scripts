const { faker } = require('@faker-js/faker');
const fs = require('fs');

function getBirthDate(type) {
  let year = 2020;
  switch (type) {
    case 'baby':
      year = faker.number.int({ min: 0, max: 5 });
      break;
    case 'child':
      year = faker.number.int({ min: 5, max: 18 });
      break;
    case 'young':
      year = faker.number.int({ min: 19, max: 28 });
      break;
    case 'worker':
      year = faker.number.int({ min: 22, max: 59 });
      break;
    case 'old':
      year = faker.number.int({ min: 55, max: 79 });
      break;
    default:
      year = faker.number.int({ min: 0, max: 79 });
      break;
  }
  let birthYear = 2022 - year;
  let somePastDate = faker.date.past();
  return new Date(birthYear, somePastDate.getMonth(), somePastDate.getDate());
}

function getGender() {
  var gender = faker.number.int({ min: 0, max: 1 });
  return gender ? 'male' : 'female';
}

function getYesOrNo() {
  const yesOrNo = faker.number.int({ min: 0, max: 1 });
  return yesOrNo ? true : false;
}

function getName(gender) {
  let isMiddleNeeded = getYesOrNo();
  const firstName = faker.person.firstName(gender);
  const lastName = faker.person.lastName(gender);
  const middleName = isMiddleNeeded ? faker.person.middleName(gender).toUpperCase() : null;

  return {
    firstName,
    lastName,
    middleName,
  };
}

function getSSN(dob) {
  const year = dob.getFullYear();
  return '392-' + year + '-' + faker.finance.accountNumber(6) + '-' + faker.finance.accountNumber(1);
}

function getPerson(gender, type, lastName) {
  if (!gender) gender = getGender();

  if (!type) type = faker.helpers.arrayElement(['baby', 'child', 'young', 'worker', 'old']);

  let person = {
    id: faker.string.uuid(),
    gender: gender,
  };

  let name = getName(person.gender);
  let dob = getBirthDate(type);
  let ssn = getSSN(dob);

  person = {
    ...person,
    firstName: name.firstName,
    lastName: lastName ? lastName : name.lastName,
    middleName: name.middleName,
    dob,
    ssn,
  };

  return person;
}

function getFamily() {
  let kidsCount = faker.number.int({ min: 0, max: 6 });
  let kids = [];
  const father = getPerson('male', 'worker');
  const mother = getPerson('female', 'worker');
  let lastName = father.lastName;
  for (let i = 0; i < kidsCount; i++) {
    let type = faker.helpers.arrayElement(['baby', 'child', 'young']);
    kids.push(getPerson(undefined, type, lastName));
  }

  return [father, mother, ...kids];
}

let family = getFamily();

let data = JSON.stringify({ family });
fs.writeFileSync('family.json', data);
