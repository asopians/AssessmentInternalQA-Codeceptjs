Feature('Update-User');
const expect = require("chai").expect;
const HitAPI = require("../Api/3.PutUpdateUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");

Scenario('Update User', async ({ I }) => {
const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
const parseData = JSON.parse(rawData);
const nama = parseData[0].name;
const email = parseData[0].email;
console.log(parseData[0])
const ResponDetail = await HitAPI.UpdateUserNormal({
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

Scenario('Update_User_Email_Kosong', async ({ I }) => {
  const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
  const parseData = JSON.parse(rawData);
  const email = parseData[0].email;
  console.log(parseData[0])
  const ResponDetail = await HitAPI.UpdateUserEmailKosong({
      path : `/public/v2/users/${parseData[0].id}`,
      PayloadHeader: Payload.headerRequest({}),
      PayloadBody: Payload.UpdateUser({    
      emailupdate: "Updatenih jadi email kosong" + email
    }),
  
  });
  
  expect(ResponDetail.body[0]).to.be.an("object");
  expect(ResponDetail.body[0].message).equals("is invalid");
  console.log(ResponDetail.body);
  });

  Scenario('Update_User_Gender_Kosong', async ({ I }) => {
    const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
    const parseData = JSON.parse(rawData);
    const gender = parseData[0].gender;
    console.log(parseData[0])
    const ResponDetail = await HitAPI.UpdateUserGenderlKosong({
        path : `/public/v2/users/${parseData[0].id}`,
        PayloadHeader: Payload.headerRequest({}),
        PayloadBody: Payload.UpdateUser({    
        genderupdate: "Banci" + gender
      }),
    
    });
    
    expect(ResponDetail.body[0]).to.be.an("object");
    expect(ResponDetail.body[0].message).equals("can't be blank, can be male of female");
    console.log(ResponDetail.body);
    });
  
    Scenario('Update_Methode_Selain_Put', async ({ I }) => {
      const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
      const parseData = JSON.parse(rawData);
      const gender = parseData[0].gender;
      const ResponDetail = await HitAPI.MethodeSelainPut({
          path : `/public/v2/users/${parseData[0].id}`,
          PayloadHeader: Payload.headerRequest({}),
          PayloadBody: Payload.UpdateUser({
            genderupdate: "test" + gender
          }),
      
      });
      expect(ResponDetail.statusCode).equals(404);
      console.log(ResponDetail.statusCode);
      });

      