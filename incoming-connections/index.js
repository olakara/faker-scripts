const { faker } = require('@faker-js/faker');
const fs = require('fs');

let result = [];
for (i = 0; i < 2000; i++) {
  let transaction = {
    id: faker.string.uuid(),
    agent: faker.internet.userAgent(),
    from: faker.internet.ip(),
    mac: faker.internet.mac(),
    port: faker.helpers.arrayElement(['80', '8080', '9000', '1433', '7653', '7654', '1933']),
    timeStamp: faker.date.recent(faker.string.numeric(2)),
  };
  result.push(transaction);
}

let data = JSON.stringify({ transactions: result });
fs.writeFileSync('transactions.json', data);
