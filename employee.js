import { faker } from '@faker-js/faker';
import { getPerson  } from './people.js';


function getEmployeeId() {
    const type = faker.random.arrayElement(['C', 'P', 'T']);
    return type + faker.finance.account(5);
}

function getMobile() {
  return faker.phone.phoneNumber('+971-5#-#######');
}

const orgTree = {
  "id": "f48091cf-3cb9-4e01-9b5b-f3455a6148f6",
  "name": "Jakarta Manufacturing Ltd",
  "departments": [
      {"id":"abc6be69-69b4-4b46-9e76-0b3138fd2b84","name":"Adminstration","code": "ADM"},
      {"id":"cd2f7052-b5ae-4b57-88aa-1e78e81f0ae8","name":"Finance","code": "FIN"},
      {"id":"0735fd90-d3b9-432b-8721-241fe2b7519f","name":"Human Resource","code": "HR"},
      {"id":"baf2b13b-1dd4-4499-b33f-98fc2c80e1d2","name":"Inventory","code": "INV" },
      {"id":"3ec975ce-1af7-47d0-9bab-6e3857918bda","name":"Logistics","code": "LGX"},        
      {"id":"7c717dff-2f66-4373-b0fe-0b06478eecfe","name":"Procurement","code": "PRM"},
      {"id":"fa6a261a-d75e-4bf4-8339-f2d8162ce166","name":"Manufacturing","code": "MNU",
          "departments": [
              {"id":"d3c3aa42-50eb-418f-a6e9-8f2ad294a014","name":"Asphalt 1","code": "AS1",
                  "departments": [
                      {"id": "47925198-5878-4c6a-a285-1bc40fee06b5", "name":"Office","code":"OFF"},                        
                      {"id": "f5b9f0fe-5e52-4f2e-ae34-31e1755f7603", "name":"Site","code":"SIT","departments": [
                          {"id": "d3d901cc-e6df-4d93-8015-abfd69c32b58", "name":"U1","code":"U1"},
                          {"id": "abc8b3b9-d298-431e-ae0d-2fb2ac91b8ca", "name":"U2","code":"U2"}
                      ]}
                  ]},
              {"id":"d2dca165-b125-43c8-854f-dc361c1c51c4","name":"Alpha Rome","code": "AR","departments": [                    
                  {"id": "d46426d5-c631-4648-8c97-8f4170234fc2", "name":"Site","code":"SIT","departments": [
                      {"id": "b393fb0b-981d-4456-ac63-6814ea776e32", "name":"U1","code":"U1"}
                  ]}
              ]},
              {"id":"d18804c1-af7f-4d4f-abdc-fcd5eca2fd49","name":"Asphalt 2","code": "AS2","departments": [
                  {"id": "ef40073c-9f6a-4c85-9436-0099d7767e55", "name":"Office","code":"OFF","departments": []},
                  {"id": "8c09dafc-5923-44fb-8bd0-bc1c46b6ebf8", "name":"Platform","code":"PLT","departments": [
                      {"id": "c1875e95-7817-40fe-882f-c70a94fbf36a", "name":"PDX","code":"PDX"}
                  ]},
                  {"id": "05514cfd-33e6-4dcd-93c3-e05724ff922c", "name":"Site","code":"SIT","departments": [
                      {"id": "bfa1f9d2-078d-4c40-ae45-d9708a8d8687", "name":"X1","code":"X1"},
                      {"id": "f474430e-23cf-4c37-b314-794dc72a1dee", "name":"X3","code":"X3"},
                      {"id": "d87fa1f2-f377-4e1c-ba86-882bbe145be4", "name":"X4","code":"X4"},
                      {"id": "95222242-3243-446f-abe2-ddbcd8002af4", "name":"X5","code":"X5"}
                  ]}
              ]},
              {"id":"798f9418-e772-4bcd-b7bb-d47c708ecdc6","name":"Fly Wheel","code": "FWLX","departments": [                    
                  {"id": "bdf231fb-6e4b-464b-819d-42a27888f43f", "name":"Site","code": "SIT","departments": [
                      {"id": "5e77713a-786e-40ea-8e28-1285c1ec9212", "name":"U1","code": "U1"},
                      {"id": "0403cb28-1b7c-4007-b7ea-1a93857db704", "name":"U2","code": "U2"},
                      {"id": "d4de256b-320f-44e8-aebf-c07d0b935a1c", "name":"X5","code": "X5"}
                  ]}
              ]},
              {"id":"2054aba2-e75f-4a8d-8a9a-d407fc95a0e6","name":"Apache","code": "APH","departments": [                   
                  {"id": "99de7e39-fa08-4883-a99e-846fcc5346dc", "name":"Platform","code": "PLT","departments": [
                      {"id": "f09c411e-a25a-4c35-80d8-f7c2e50b70c2", "name":"QXL","code": "QXL"}
                  ]},
                  {"id": "8ce7087b-98d4-4c17-9570-82b8235c82e5", "name":"Site","code": "SIT","departments": [
                      {"id": "2e7ea0ac-0115-4847-9775-1edac60e3381", "name":"U1","code": "U1"},
                      {"id": "19125ffd-049c-4d19-a17f-a632ad697d36", "name":"Z1","code": "Z1"}
                  ]}
              ]}
          ]
      }      
  ]
}

function getDepartmentPathString(orgTree) {
  let departments = orgTree.departments;  
  if(!departments)
    return;
  if(departments && departments.length){
    let unit = faker.random.arrayElement(departments);
    let result = getDepartmentPathString(unit);
    if(result)
      return result + ' - ' +unit.code;
    else
      return unit.code;
  } 
}

function getDepartmentSection() {
  return faker.name.jobArea();
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
    person.department = getDepartmentPathString(orgTree);
    person.joinDate = getJoiningDate(person.dob);
    person.jobType = faker.name.jobType();
    person.avatar = faker.image.avatar();
    return person;
  }

 export {
    getEmployee,
 }
 