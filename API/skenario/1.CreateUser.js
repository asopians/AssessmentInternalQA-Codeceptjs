Feature('Create-User');
const expect = require("chai").expect;
const HitAPI = require("../Api/1.PostCreateUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");


Scenario('Create User', async ({ I }) => {
    const response = await HitAPI.CreateUserNormal({
        
      PayloadHeader: Payload.headerRequest({}), 
      PayloadBody: Payload.CreateUser({})
    });
      expect(response.body).to.be.an("object");
      expect(response.statusCode).equals(201);
      console.log(response.body);
      console.log(response.statusCode);
      const responsetojson = response.body
   
    fs.readFile('./API/data/JsonData.json', 'utf8', (err, data) => {
    const parseData = JSON.parse(data);
    parseData[0] = responsetojson
    console.log('Data read from file:', parseData);
    fs.writeFile('./API/data/JsonData.json', JSON.stringify(parseData),'utf8', (err) => {
    });
  });
});

