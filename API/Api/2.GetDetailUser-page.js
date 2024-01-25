const supertest = require('supertest');
const request = supertest(process.env.Base_URL);
const faker = require("faker");

    const DetailUserNormal = (args) => {
        return request
           .get(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const DetailUserTidakterdaftar = (args) => {
        return request
           .get(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const DetailUserMethodSelainget = (args) => {
        return request
           .post(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }
    
module.exports = {
    DetailUserNormal,
    DetailUserTidakterdaftar,
    DetailUserMethodSelainget

}