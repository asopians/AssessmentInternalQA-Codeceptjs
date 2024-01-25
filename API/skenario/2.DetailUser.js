Feature('Detail-User');
const expect = require("chai").expect;
const HitAPI = require("../Api/2.GetDetailUser-page");
const Payload = require("../data/dataRequest");
const fs = require("fs");

Scenario('Detail_User', async ({ I }) => {
// get detail user from data json
const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
const parseData = JSON.parse(rawData);
console.log(parseData[0])
const ResponDetail = await HitAPI.DetailUserNormal({
    path : `/public/v2/users/${parseData[0].id}`,  //get data from json array 0
    PayloadHeader: Payload.headerRequest({})
});
//validasi detail user
expect(ResponDetail.body).to.be.an("object");
expect(ResponDetail.statusCode).equals(200);
console.log(ResponDetail.body);
console.log(ResponDetail.statusCode);
});

Scenario('Detail_User_Tidak_Terdaftar', async ({ I }) => {
    const ResponDetail = await HitAPI.DetailUserTidakterdaftar({
        path : `/public/v2/users/hehengasal`, //using abronal path
        PayloadHeader: Payload.headerRequest({})
    });
    //validasi detail user
    expect(ResponDetail.body).to.be.an("object");
    expect(ResponDetail.statusCode).equals(404);
    expect(ResponDetail.body.message).equals("Resource not found");
    console.log(ResponDetail.body);
    console.log(ResponDetail.statusCode);
    });

Scenario('Detail_User_Method_Selain_GET', async ({ I }) => {
        const rawData = fs.readFileSync('./API/data/JsonData.json', 'utf8');
        const parseData = JSON.parse(rawData);
        const ResponDetail = await HitAPI.DetailUserMethodSelainget({
            path : `/public/v2/users/${parseData[0].id}`,
            PayloadHeader: Payload.headerRequest({})
        });
        //validasi detail user
        expect(ResponDetail.statusCode).equals(404);
        console.log(ResponDetail.statusCode);
        });

