Feature('Create-User');
const expect = require("chai").expect;
const HitAPI = require("../Api/1.PostCreateUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");


Scenario('Create_User', async ({ I }) => {
    const response = await HitAPI.CreateUserNormal({
      // header dan payload create user  
      PayloadHeader: Payload.headerRequest({}), 
      PayloadBody: Payload.CreateUser({})
    });
    // validas create user
      expect(response.body).to.be.an("object");
      expect(response.statusCode).equals(201);
      console.log(response.body);
      console.log(response.statusCode);
      const responsetojson = response.body
   // read dan werite datajson create user
    fs.readFile('./API/data/JsonData.json', 'utf8', (err, data) => {
    const parseData = JSON.parse(data);
    parseData[0] = responsetojson
    console.log('Data read from file:', parseData);
    fs.writeFile('./API/data/JsonData.json', JSON.stringify(parseData),'utf8', (err) => {
    });
  });
});

Scenario('Create_User_Path_Selain_Post', async ({ I }) => {
  const response = await HitAPI.CreateUserPathSelainPost({
      // header dan payload create user 
    PayloadHeader: Payload.headerRequest({}), 
    PayloadBody: Payload.CreateUser({})
  });
   // validas create user
    expect(response.statusCode).equals(404);
    console.log(response.statusCode);
    const responsetojson = response.body
 
});

