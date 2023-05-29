const { faker } = require('@faker-js/faker');
const fs = require('fs');

let result = [];
for (i = 0; i < 2000; i++) {
  let gender = faker.person.sexType();
  let fname = faker.person.firstName(gender);
  let lname = faker.person.lastName(gender);
  let person = {
    id: faker.string.uuid(),
    firstName: fname,
    lastName: lname,
    gender: gender,
    email: faker.internet.email(fname, lname),
    job: faker.person.jobArea(),
    mobile: faker.phone.number('+971-5########'),
    color: faker.internet.color(),
    avatar: faker.internet.avatar(),
    ip: faker.internet.ip(),
    dateOfJoin: faker.date.past(faker.string.numeric(2)),
    active: faker.datatype.boolean(),
  };
  result.push(person);
}
//console.log(result);

let data = JSON.stringify({ people: result });
fs.writeFileSync('people.json', data);
