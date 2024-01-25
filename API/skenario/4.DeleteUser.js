Feature('Delete-User');
const expect = require("chai").expect;
const HitAPI = require("../Api/4.DeleteUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");

Scenario('Delete_User', async ({ I }) => {
const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
const parseData = JSON.parse(rawData);
console.log(parseData[0]) 
const ResponDetail = await HitAPI.DeleteNormal({
    // path dan header delete user
    path : `/public/v2/users/${parseData[0].id}`,
    PayloadHeader: Payload.headerRequest({})
});
//validasi delete user
expect(ResponDetail.body).to.be.an("object");
expect(ResponDetail.statusCode).equals(204);
console.log(ResponDetail.body);
console.log(ResponDetail.statusCode);
});

Scenario('Delete_User_Methode_Selain_Post', async ({ I }) => {
    const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
    const parseData = JSON.parse(rawData);
    const ResponDetail = await HitAPI.DeleteUserMethodeSelainDelete({
        // path dan header delete user
        path : `/public/v2/users/${parseData[0].id}`,
        PayloadHeader: Payload.headerRequest({})
    });
    //validasi delete user
    expect(ResponDetail.statusCode).equals(404);
    console.log(ResponDetail.statusCode);
    });