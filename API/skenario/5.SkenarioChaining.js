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

Scenario('Detail_User', async ({ I }) => {
  const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
  const parseData = JSON.parse(rawData);
  console.log(parseData[0])
  const ResponDetail = await HitAPB.DetailUserNormal({
      path : `/public/v2/users/${parseData[0].id}`,
      PayloadHeader: Payload.headerRequest({})
  });
  expect(ResponDetail.body).to.be.an("object");
  expect(ResponDetail.statusCode).equals(200);
  console.log(ResponDetail.body);
  console.log(ResponDetail.statusCode);
  });

Scenario('Update User', async ({ I }) => {
    const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
    const parseData = JSON.parse(rawData);
    const nama = parseData[0].name;
    const email = parseData[0].email;
    console.log(parseData[0])
    const ResponDetail = await HitAPC.UpdateUserNormal({
        path : `/public/v2/users/${parseData[0].id}`,
        PayloadHeader: Payload.headerRequest({}),
        PayloadBody: Payload.UpdateUser({    
        nameupdate: "Hafiz " + nama,
        emailupdate: "Updatenih-" + email
      }),
    
    });
    
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
          path : `/public/v2/users/${parseData[0].id}`,
          PayloadHeader: Payload.headerRequest({})
      });
      expect(ResponDetail.body).to.be.an("object");
      expect(ResponDetail.statusCode).equals(204);
      console.log(ResponDetail.body);
      console.log(ResponDetail.statusCode);
      });
      