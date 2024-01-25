Feature('Chaining');
const expect = require("chai").expect;
const HitAPA = require("../Api/1.PostCreateUser-page");
const HitAPB = require("../Api/2.GetDetailUser-page");
const HitAPC = require("../Api/3.PutUpdateUser-page");
const HitAPD = require("../Api/4.DeleteUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");


Scenario('Create User', async ({ I }) => {
    const response = await HitAPA.CreateUserNormal({
      // header dan payload create user  
      PayloadHeader: Payload.headerRequest({}), 
      PayloadBody: Payload.CreateUser({})
    });
    // Validasi Create User
      expect(response.body).to.be.an("object");
      expect(response.statusCode).equals(201);
      console.log(response.body);
      console.log(response.statusCode);
      const responsetojson = response.body
    // Read dan Write datajson create user
    fs.readFile('./API/data/JsonData.json', 'utf8', (err, data) => {
    const parseData = JSON.parse(data);
    parseData[0] = responsetojson
    console.log('Data read from file:', parseData);
    fs.writeFile('./API/data/JsonData.json', JSON.stringify(parseData),'utf8', (err) => {
    });
  });
});

Scenario('Detail_User', async ({ I }) => {
  const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
  const parseData = JSON.parse(rawData);
  console.log(parseData[0])
  const ResponDetail = await HitAPB.DetailUserNormal({
    // path dan header detail user
      path : `/public/v2/users/${parseData[0].id}`,
      PayloadHeader: Payload.headerRequest({})
  });
  // Validasi Detail User
  expect(ResponDetail.body).to.be.an("object");
  expect(ResponDetail.statusCode).equals(200);
  console.log(ResponDetail.body);
  console.log(ResponDetail.statusCode);
  });

Scenario('Update User', async ({ I }) => {
    const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
    const parseData = JSON.parse(rawData);
    const nama = parseData[0].name; //read data name from json array 0
    const email = parseData[0].email; //read data email from json array 0
    console.log(parseData[0])
    const ResponDetail = await HitAPC.UpdateUserNormal({
      // path, header dan payload update user
        path : `/public/v2/users/${parseData[0].id}`, 
        PayloadHeader: Payload.headerRequest({}),
        PayloadBody: Payload.UpdateUser({    
        nameupdate: "Hafiz " + nama,
        emailupdate: "Updatenih-" + email
      }),
    
    });
    //validasi update user
    expect(ResponDetail.body).to.be.an("object");
    expect(ResponDetail.body.name).equals("Hafiz "+ nama);
    expect(ResponDetail.body.email).equals("Updatenih-" + email);
    console.log(ResponDetail.body);
    });
    
Scenario('Delete_User', async ({ I }) => {
      const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
      const parseData = JSON.parse(rawData);
      console.log(parseData[0])
      const ResponDetail = await HitAPD.DeleteNormal({
        // path dan header delete user
          path : `/public/v2/users/${parseData[0].id}`,
          PayloadHeader: Payload.headerRequest({})
      });
      // Validasi Delete User
      expect(ResponDetail.body).to.be.an("object");
      expect(ResponDetail.statusCode).equals(204);
      console.log(ResponDetail.body);
      console.log(ResponDetail.statusCode);
      });
      